export class SeePercivalInfoComponent {
    private percival: string;
    private role: string;
    private isEnabled: boolean;
    private thisRoom: any;
  
    constructor(percival: string, role: string, isEnabled: boolean, thisRoom: any) {
      this.percival = percival;
      this.role = role;
      this.isEnabled = isEnabled;
      this.thisRoom = thisRoom;
    }
  
    see(): { [username: string]: { roleTag: string } } {
      if (this.thisRoom.gameStarted === true) {
        const roleTag: { [username: string]: { roleTag: string } } = {};
  
        for (let i = 0; i < this.thisRoom.playersInGame.length; i++) {
          if (this.thisRoom.playersInGame[i].role === 'Merlin' || this.thisRoom.playersInGame[i].role === 'Morgana') {
            roleTag[this.thisRoom.playersInGame[i].username] = { roleTag: 'Good' };
          }
        }
  
        return roleTag;
      } else {
        return {};
      }
    }
  
    getPercival(): string {
      return this.percival;
    }
  
    setViewer(newPercival: string): void {
      this.percival = newPercival;
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