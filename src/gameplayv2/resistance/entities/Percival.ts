import { AllianceComponent } from '../components/AllianceComponent';
import { RoleComponent } from '../components/RoleComponent';
import { DescriptionComponent } from '../components/DescriptionComponent';
import { Entity } from '../system';

class Percival extends Player {
    static nextId: number = 0;
    id: number;
    components: Component[];

    constructor() {
        super();
        this.id = Entity.getNextID();
        this.components = [];
        this.addComponent(new AllianceComponent('Resistance'));
        this.addComponent(new RoleComponent('Percival'));
        this.addComponent(new DescriptionComponent('Knows the identity of Merlin and Morgana, but not which is which.'));
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
        return Percival.nextId++;
    }
}

export { Percival };