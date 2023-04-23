import { Component } from '../components/Component';
import { RoleComponent } from '../components/RoleComponent';
import { AllianceComponent } from '../components/AllianceComponent';
import { Entity } from '../system/Entity';

class Isolde extends Entity {
  static nextId: number = 0;
  id: number;
  components: Component[];

  constructor() {
    super();
    this.id = Isolde.getNextID();
    this.components = [];
    this.addComponent(new RoleComponent('Isolde'));
    this.addComponent(new AllianceComponent('Good'));
  }

  addComponent(component: Component): void {
    this.components.push(component);
  }

  removeComponent(component: Component): void {
    const index = this.components.indexOf(component);
    if (index !== -1) {
      this.components.splice(index, 1);
    }
  }

  static getNextID(): number {
    return Isolde.nextId++;
  }
}

export { Isolde };
