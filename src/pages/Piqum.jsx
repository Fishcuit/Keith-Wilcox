import React from "react";


const Piqum = () => {
  return (
    <div>
      <div className="pt-20  px-20">
        <h1 className="text-[24px]">Welcome to PiQum Series</h1>
        <p>
          Piqum is a series of casino games designed for both mobile and in-person
          play.
        </p>
        <p>
          In these prototypes 100% of the work is done using python with
          libraries such as tkinter, pandas, and numpy.
        </p>
        <h2 className="text-[24px]">BASE GAME</h2>
        <div>
          {" "}
          1. This is the base prototype which features 1 row of cards to choose
          from. When at this point in te game a player will pick a card and
          press reveal to continue.
        </div>
        <img
          width="545"
          alt="1"
          src="https://user-images.githubusercontent.com/35702659/221296976-156ee4e2-6fe4-4435-83ff-e226e8e3faca.png"
        />
        <div>
          2. Once a card is seleted it raises slightly to lock in and the reveal
          button is unlocked.{" "}
        </div>
        <img
          width="544"
          alt="2"
          src="https://user-images.githubusercontent.com/35702659/221312560-7b602acd-2dd1-414e-8a7a-c6eefa83ba95.png"
        />
        <div>
          3. When reveal is pressed all cards reveal and the player is paid
          according to the card selected. In the base game Jacks pay 1x, Queesns
          pay 2x, Kings pay 3x, Aces pay 4x, and everything else pays 0.{" "}
        </div>
        <img
          width="548"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221313708-15210234-40a4-4d93-b08b-6bd6e724232a.png"
        />
        <div>
          4. The player will then select Deal to start over or select wager to
          raise or lower their bet. If bet is changed all jackpot pays change
          accordingly. Example in the photo below, the best is changed to $2 and
          jackpots change with it.
        </div>
        <img
          width="547"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221315435-fd4a737b-908a-4dfd-a155-30b6447c1964.png"
        />
        <h2 className="text-[24px]">FEATURES</h2>
        <h3>MULTIPLIERS</h3>
        <div>
          1. While playing the base game there is a random chance that a
          multiplier will appear in the hard. These multipliers carry over to
          the next game regardless of if they were the chosen card.
        </div>
        <img
          width="547"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221317474-1340c4a7-2221-446b-992e-2cd67e83c2fa.png"
        />
        <div>
          Once a card is seleted it raises slightly to lock in and the reveal
          button is unlocked. Multipliers can multiply each other up 3 times up
          to 125x. Selecting a face card after a multiplier will multiply the
          face card by the multipler received.{" "}
        </div>
        <h3>FREE PLAYS</h3>
        <div>
          1. Free plays, like multipliers, also stick until the next hand.
          Selecting the free pick card reduces the bet ammount to 0 for the next
          game.
        </div>
        <img
          width="547"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221317818-bf79e7be-757f-4a02-882f-60a96ab63f07.png"
        />
        <h3 className="text-[24px]">BONUS LEVEL</h3>
        <div>
          1. Depending on which version is being played, there is a certain
          number of bonus cards in the deck. Choosing one of these cards will
          take the player to the Bonus ladder.{" "}
        </div>
        <img
          width="545"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319024-b6514d59-410b-4837-9da4-374710f1a29d.png"
        />
        <div>
          2. When the player enters any bonus level they will first be shown
          what they can potentially win in this bonus level.
        </div>
        <img
          width="547"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319256-1071e2a2-e1d8-4dca-869d-4c77a87ed21e.png"
        />
        <div>
          {" "}
          When the player presses the shuffle button the cards are flipped and
          shuffled.{" "}
        </div>
        <img
          width="547"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319395-50933fa9-339b-4bfc-89a1-c65d72e99c21.png"
        />
        <div>
          Bonus levels go up to around 9 levels depending on which version is
          being played. Picking a bonus up will take the player to the next
          round, while picking anything else will pay the player thier prize and
          return to the base game.{" "}
        </div>
        <img
          width="545"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319627-bc5ae42e-3326-4925-b015-b9f9d713c127.png"
        />

        <h2>Triple PiQum</h2>
        <div>
          The triple play version of PiQum follows all the same rules but the
          player plays 3 hands at once.{" "}
        </div>
        <img
          width="639"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319929-1c65c92f-af27-453e-bd7e-7b6774d15c58.png"
        />
        <img
          width="641"
          alt="image"
          src="https://user-images.githubusercontent.com/35702659/221319994-9a36d144-4ae3-4af4-92db-70ba4d0d0752.png"
        />
      </div>
    </div>
  );
};

export default Piqum;
