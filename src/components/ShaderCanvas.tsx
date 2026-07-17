import { useEffect, useRef } from "react";

export default function ShaderCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl) return;

    let animationFrameId: number;
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      varying vec2 v_texCoord;

      void main() {
        vec2 uv = v_texCoord;
        vec2 mouse = u_mouse / u_resolution;
        
        // Create a dark base
        vec3 color = vec3(0.04, 0.04, 0.05);
        
        // Background noise/glow
        float d = length(uv - 0.5);
        color += vec3(0.1, 0.05, 0.0) * (1.0 - d);
        
        // Floating particles/nodes effect
        for(float i = 0.0; i < 8.0; i++) {
          float t = u_time * (0.1 + i * 0.05);
          vec2 p = vec2(
            0.5 + 0.3 * sin(t + i * 1.5),
            0.5 + 0.3 * cos(t * 0.8 + i * 2.0)
          );
          
          // Mouse influence
          float distToMouse = length(uv - mouse);
          p += (mouse - 0.5) * 0.1 * (1.0 / (1.0 + i));
          
          float pct = 0.002 / length(uv - p);
          
          // Orange and Gold color variation
          vec3 particleColor = mix(vec3(1.0, 0.5, 0.0), vec3(1.0, 0.8, 0.2), sin(i + u_time) * 0.5 + 0.5);
          color += particleColor * pow(pct, 1.5);
        }
        
        // Subtle scanline effect
        color *= 0.95 + 0.05 * sin(uv.y * 400.0 + u_time * 2.0);
        
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    function compileShader(source: string, type: number): WebGLShader | null {
      const shader = gl!.createShader(type);
      if (!shader) return null;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error("Shader compilation error:", gl!.getShaderInfoLog(shader));
        gl!.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(vsSource, gl.VERTEX_SHADER);
    const fs = compileShader(fsSource, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Quad vertices
    const vertices = new Float32Array([
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLoc = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, "u_time");
    const uResolutionLoc = gl.getUniformLocation(program, "u_resolution");
    const uMouseLoc = gl.getUniformLocation(program, "u_mouse");

    // Track mouse coordinates
    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouseX = nx * canvas.width;
        mouseY = ny * canvas.height;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Sync drawing buffer size
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width || canvas.clientWidth || 1280;
        const height = entry.contentRect.height || canvas.clientHeight || 720;
        if (canvas.width !== width || canvas.height !== height) {
          canvas.width = width;
          canvas.height = height;
          gl.viewport(0, 0, width, height);
        }
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Render loop
    const render = (time: number) => {
      gl.clearColor(0.04, 0.04, 0.05, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      if (uTimeLoc) gl.uniform1f(uTimeLoc, time * 0.001);
      if (uResolutionLoc) gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);
      if (uMouseLoc) gl.uniform2f(uMouseLoc, mouseX, mouseY);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      
      // Free WebGL resources safely
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none opacity-45 bg-[#050505]">
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
