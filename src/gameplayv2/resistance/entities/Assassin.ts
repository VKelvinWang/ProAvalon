import { AllianceComponent } from '../components/AllianceComponent';
import { RoleComponent } from '../components/RoleComponent';
import { DescriptionComponent } from '../components/DescriptionComponent';
import { Entity } from '../entities/Entity';

class Assassin extends Player {
    static nextId: number = 0;
    id: number;
    components: Component[];

    constructor() {
        super();
        this.id = Entity.getNextID();
        this.components = [];
        this.addComponent(new AllianceComponent('Spy'));
        this.addComponent(new RoleComponent('Assassin'));
        this.addComponent(new DescriptionComponent('If the resistance win 3 missions, the Assassin can shoot one person for Merlin, or two people for Tristan and Isolde. If they are correct, the spies win!'));
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
        return Assassin.nextId++;
    }
}

//TO DO: See Assassin & win condition 
//Pass a list of player list so Assassin knows who the killer is with condition (Lookup obj containng list of all components)
// Pass through all the
//Define Assassin as a phase 
// 