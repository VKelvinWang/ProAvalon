import { createWorld, System } from 'ecsy';
import { AllianceComponent } from './alliance_component';
import { RoleComponent } from './role_component';
import { DescriptionComponent } from './description_component';

class Percival {
  constructor() {
    this.components = [];
    this.addComponent(new AllianceComponent('Resistance'));
    this.addComponent(new RoleComponent('Percival'));
    this.addComponent(new DescriptionComponent('A member of the Resistance who knows the identity of Merlin and Morgana.'));
  }

  addComponent(component) {
    this.components.push(component);
  }

  removeComponent(component) {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }
}

// Get the entity representing the player playing as Percival
const percivalEntity = world.getEntities().find(entity => {
  const roleComponent = entity.getComponent(RoleComponent);
  return roleComponent && roleComponent.role === 'Percival';
});

// Get the entity representing the player playing as Merlin
const merlinEntity = world.getEntities().find(entity => {
  const roleComponent = entity.getComponent(RoleComponent);
  return roleComponent && roleComponent.role === 'Merlin';
});

// Get the entity representing the player playing as Morgana
const morganaEntity = world.getEntities().find(entity => {
  const roleComponent = entity.getComponent(RoleComponent);
  return roleComponent && roleComponent.role === 'Morgana';
});

// // Display the identity of Merlin and Morgana to Percival
const isMerlin = entity => entity === merlinEntity;
const isMorgana = entity => entity === morganaEntity;
const playersKnows = world.getEntities().filter(entity => {
  const roleComponent = entity.getComponent(RoleComponent);
  return roleComponent && (isMerlin(entity) || isMorgana(entity));
});