export class IsoldeInfoComponent {
    private isolde: string;
    private role: string;
    private isEnabled: boolean;
    private thisRoom: any;
  
    constructor(isolde: string, role: string, isEnabled: boolean, thisRoom: any) {
      this.isolde = isolde;
      this.role = role;
      this.isEnabled = isEnabled;
      this.thisRoom = thisRoom;
    }
  
    see(): { [username: string]: { roleTag: string } } {
      if (this.thisRoom.gameStarted === true) {
        const roleTag: { [username: string]: { roleTag: string } } = {};
  
        for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
          if (this.thisRoom.playersInGame[i].role === 'Tristan' || this.thisRoom.playersInGame[i].role === 'Iseult') {
            roleTag[this.thisRoom.playersInGame[i].username] = { roleTag: 'Good' };
          } else if (this.thisRoom.playersInGame[i].role === 'Lancelot') {
            roleTag[this.thisRoom.playersInGame[i].username] = { roleTag: 'Evil' };
          }
        }
  
        return roleTag;
      } else {
        return {};
      }
    }
  
    getIsolde(): string {
      return this.isolde;
    }
  
    setViewer(newIsolde: string): void {
      this.isolde = newIsolde;
    }
  
    getRole(): any {
      return this.role;
    }
  
    setBeingViewed(role: any): void {
      this.role = role;
    }
  
    getEnabled(): boolean {
      return this.isEnabled;
    }
  
    setEnabled(newEnabled: boolean): void {
      this.isEnabled = newEnabled;
    }
  }
  