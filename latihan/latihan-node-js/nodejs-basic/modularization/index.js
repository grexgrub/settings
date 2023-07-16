const Tiger = require('./Tiger')
const Wolf = require('./Wolf')

const tiger = new Tiger
const wolf = new Wolf 


const fight = (tiger, wolf) => {
  if(tiger.strength > wolf.strength){
    tiger.growl()
    return
  }

  if(tiger.strength < wolf.strength){
    wolf.howl()
    return
  }


  console.log('seimbang')
}

fight(tiger, wolf)

