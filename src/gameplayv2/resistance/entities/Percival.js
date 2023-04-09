import { alliance } from  '../components/alliance'
import { world } from '../system'

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