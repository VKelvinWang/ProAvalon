export class SeeMordredComponent {
    private Mordred: string;
    private Role: string;
    private isEnabled: boolean;

    constructor(Mordred: string, Role: string, isEnabled: boolean) {
        this.Mordred = Mordred;
        this.Role = Role;
        this.isEnabled = isEnabled;
    }

    // Getter and setter for Morgana
    getMordred(): string {
        return this.Mordred;
    }

    setMordred(Mordred: string): void {
        this.Mordred = Mordred;
    }

    // Getter function for Role
    getRole(): string {
        return this.Role;
    }

    // Setter function for Role
    setRole(Role: string): void {
        this.Role = Role;
    }

    // Getter and setter for isEnabled
    getIsEnabled(): boolean {
        return this.isEnabled;
    }

    setIsEnabled(isEnabled: boolean): void {
        this.isEnabled = isEnabled;
    }
}

//TO DO: Merlin cannot see Mordred, 