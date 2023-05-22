skills = [
    {
      id: 1,
      skill: 'Functional Programming',
      proficiency: 4,
    },
    {
      id: 2,
      skill: 'OOP',
      proficiency: 3,
    },
    {
      id: 3,
      skill: 'Version Control',
      proficiency: 4,
    }
  ];
  
  module.exports = {
      getAll,
      getOne,
      create,
      deleteOne,
      update
  }

  function update(id, updatedTodo) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  
  function getAll() {
      return skills;
  }
  
  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  