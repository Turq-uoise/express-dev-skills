skills = [
    {
      id: 1,
      skill: 'Functional Programming',
      proficiency: '4/5',
    },
    {
      id: 2,
      skill: 'OOP',
      proficiency: '3/5',
    },
    {
      id: 3,
      skill: 'Version Control',
      proficiency: '4/5',
    }
  ];
  
  module.exports = {
      getAll,
      getOne
  }
  
  function getAll() {
      return skills;
  }
  
  function getOne(id){
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  