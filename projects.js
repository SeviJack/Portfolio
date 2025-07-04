const projects = [
  {
    title: "IR Up-Conversion Simulation",
    description: "Simulates rare-earth upconversion for IR goggles using a MATLAB-based model.",
    tech: "MATLAB, Optics",
    link: "https://github.com/yourgithub/ir-upconversion"
  },
  {
    title: "ASIC Design Flow Demo",
    description: "A simple logic circuit designed and simulated using open-source ASIC tools.",
    tech: "Verilog, OpenLane, KLayout",
    link: "https://github.com/yourgithub/asic-demo"
  }
];

const container = document.getElementById("project-list");
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <p><strong>Tech:</strong> ${p.tech}</p>
    <a href="${p.link}" target="_blank">View Project</a>
  `;
  container.appendChild(card);
});
