const updateSkill = (id, uroven) => {
    const posuv = document.querySelector(`
    #${id} .skill__progress`
);
    const hodnota = document.querySelector(`
    #${id} .skill__value`
)
    hodnota.textContent = `${uroven} / 100`
    posuv.style.width = `${uroven}%`
  };
  
  const html = Number(prompt("Jaka je tvoje uroven HTML? (vyber si z moznosti 0 až 100)"))
  const css = Number(prompt("Jaka je tvoje uroven CSS? (vyber si z moznosti 0 až 100)"))
  const js = Number(prompt("Jaka je tvoje uroven JavaScriptu? (vyber si z moznosti 0 až 100)"))
  
  updateSkill('skill1', html)
  updateSkill('skill2', css)
  updateSkill('skill3', js)
