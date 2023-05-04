<<<<<<< Updated upstream
//TO DO 
=======
//TO DO 
export class SeeAssassinComponent {
    private Assassin: string;
    private Role: string;
    private isEnabled: boolean;

    constructor(Assassin: string, Role: string, isEnabled: boolean) {
        this.Assassin = Assassin;
        this.Role = Role;
        this.isEnabled = isEnabled;
    }

    // Getter and setter for Morgana
    getMordred(): string {
        return this.Assassin;
    }

    setMordred(Assassin: string): void {
        this.Assassin = Assassin;
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
>>>>>>> Stashed changes
