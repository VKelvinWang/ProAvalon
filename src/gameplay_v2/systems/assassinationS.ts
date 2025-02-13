import { SendData, System } from './system';
import { GameData } from '../gameEngine';
import { Mission, MissionC } from '../roles/components/mission';
import { Alliance, Role } from '../gameTypes';
import { Player } from '../player';
import { EndGame } from '../states/baseStates/endGame';

// As the other components not finished yet , I will start with pesodo code only this part
export class assassinationS implements System {
    run(gameData: GameData, sendData: SendData): void {


        // Get all player information as a list from 
        // GameData which is input of the functions:
        const playerList: Player[] = gameData.players;

        // get how many missions already completed:


        // The missions are not sure, but I can made one code that almost correct,
        // After mission code really complete we only need to make 
        // slightly change to it.


        // If mission code complete, it should store in gameData from the constructor.

        // const missionList: missions[] = gameData.mission;

        //check if there are 3 missions that are won by Resistance

        // if greater than 3 mission or equal to 3 mission successful, 
        // then spy win, execute this phase.


        // This variable is used to count mission that already done and win;

        // let missionWinCount = 0;
        // let missionCount = 0

        // Check how many mission are win, 
        // And add them to missionCount variable;

        // for (const mission of missions){
        // if (mission.win == 'true'){

        // number of mission that win count plus one
        //missionWinCount += 1;
        //}

        // all mission count plus one
        // missionCount += 1;
        // }



        // If mission number is less than three, break the code as assassination stage have not start yet.
        // If the total number of mission count is 5 which is all mission compelete, also trigger this assassination stage

        //if(missionWinCount < 3 && missionCount !== 5){
        //break
        //}


        // If spy already win, directly break the code
        // if(gameData.state === SPY_WIN){
        //break
        //}




        // Format is string, which store the user name of the merlin
        let merlinName = '';

        for (const player of playerList) {
            if (
                // Check where the game player is Merlin
                player.role === Role.Merlin
            ) {
                merlinName = player.username;
            }
        }


        // Then we will find which one is assassin:
        let assassinName = '';

        for (const player of playerList) {
            if (player.role === Role.Assassin) {
                assassinName = player.username;
            }
        }

        // Then we need to find out username of all player.
        // THe reason of this is to get all user's username and then let assassin choose which player to assassinate.
        // Note that we should remove the name of assassin itself.
        const usernames: string[] = [];

        for (const player of playerList) {
            // First put all the usernames into a single list/array.

            usernames.push(player.username);
        }



        // Due to it need to connect to the front-end stuff and need to be done in the next stage, 
        // We use console to choose which one to assassinate at this stage:

        console.log('Please choose the player you want to assassinate: \n');
        for (const username of usernames) {


            //Note that not include the name of assassin himself to aviod
            //unexpected bugs.


            if (username !== assassinName) {

                console.log(username);

            }
        }


        // The next step is given assassin an opportunity to choose a member to assassin.

        // Note that here we only provide a version of interactive with console and not the front-end. For the 
        // Future work, you can just replace this part with the front-end stuff and keep the logic not change.


        // this is a flag variable to store whether the spy is win.
        let spyWin = false;


        // THis is a method which ask assassin to enter who he want to assassinate
        function askAssassinName() {



            // Only for this code, user can interact with terminal
            const input = prompt('Please enter the player name you want to assassinate：');



            // If user input is merline
            if (input === merlinName) {



                // Assassinate successfully! Spy win!
                spyWin = true;
            } else if (usernames.includes(input)) {

                // Not merlin Name but input name of any other players.
                // In this case we only can assume the winner is Resistance.


            } else {

                // User's input is not exist. 
                // Ask him to re-enter.


                console.log('The name you entered is not exist. Please re-try');
                //recuring
                askAssassinName();
            }
        }

        // RUn the assassin method.
        askAssassinName();



        // THen show assassination all resistance,
        // If assassination choose the correct one, then :


        // This code are comment because End Game stage not complete yet, after he complete, uncomment it directly.
        if (spyWin) {
            //End the game, spy win

            // gameData.state = new EndGame(Spy);
        }
        else {
            // res win
            // gameData.state = new EndGame(Resistance);
        }
        //if so, then execute assassination phase where assassin selects the merlin
        //if correct, end the game as SPY_WIN
        //if not, then end the game with RESISTANCE_WIN
    }
}