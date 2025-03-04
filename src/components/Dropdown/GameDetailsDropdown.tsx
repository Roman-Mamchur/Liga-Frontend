"use client";

import Image from "next/image";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import { motion } from "framer-motion";
import { dropdownMotion, motionVariants } from "@/utils/framerUtil";

const GameDetailsDropdown = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col rounded-lg bg-card shadow-md">
      <div>
        {/* Header */}
        <div
          className="flex cursor-pointer items-center justify-between px-6 py-3"
          onClick={toggleDropdown}
        >
          <div className="flex items-center gap-3">
            <h2 className="font-semibold">Blackjack</h2>
            <h3 className="opacity-60">Evolution</h3>
          </div>
          <div
            className={`transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <FaChevronDown />
          </div>
        </div>
      </div>

      {/* Dropdown Content */}
      <motion.div
        {...motionVariants}
        variants={dropdownMotion(isOpen)}
        className="overflow-hidden"
      >
        <div className="border-t border-gray-300 p-6">
          <div>
            {/* Game Image */}
            <Image
              src="https://placehold.co/600x800.png?text=Game+Image&font=montserrat"
              alt="Game Image"
              width={150}
              height={200}
              priority={true}
              sizes="100vw"
              className="float-left mb-2 mr-4 rounded object-cover"
            />

            {/* Game Tags */}
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                Blackjack
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                Evolution
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                Live Casino
              </span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs text-white">
                Table Games
              </span>
            </div>

            {/* Game Description */}
            <div className="space-y-2 leading-relaxed">
              <p>
                Take your seat at the virtual blackjack table any time of the
                day or night to beat the dealer to a hand of 21.
              </p>
              <p>
                Live Blackjack is a live casino game from Evolution Gaming that
                allows you to sit at the virtual table and place various side
                bets to try and beat the dealer.
              </p>
              <p>
                With classic blackjack gameplay mixed in with exciting playing
                options, discover the ultimate casino experience with this
                online version of the popular casino game at Stake Casino .
              </p>
              <h3 className="text-xl font-semibold">What is Live Blackjack?</h3>
              <p>
                As a live casino table game , Live Blackjack is hosted by a
                real-life dealer and broadcast live from Evolution&apos;s
                purpose-built live studios. The aim of the game is simple
                &minus; you need to acquire a hand that is as close to or equal
                to 21 as possible without going bust.
              </p>
              <p>
                If you beat the dealer, you will earn a payout. You can also
                place various side bets in Live Blackjack, including Perfect
                Pairs and 21+3, to increase your potential payouts as you play
                at Stake Casino.
              </p>
              <h3 className="text-xl font-semibold">
                How to Play Live Blackjack by Evolution
              </h3>
              <p>
                To play Live Blackjack by Evolution Gaming, you must create an
                account at the Stake Casino. Then, deposit cryptocurrency to
                fund your gameplay and decide how much to bet per hand.
              </p>
              <p>
                As you enter the Live Blackjack game casino lobby, you will see
                seven seats at the table. If a seat is unavailable, you can use
                the “bet behind” feature, meaning you can join the game at any
                time.
              </p>
              <p>
                The objective of blackjack is to acquire a hand that is as close
                to or equal to 21 without going over. You can stand at any time
                or hit to receive another card from the dealer.
              </p>
              <p>
                Once you have decided to stand, the dealer will reveal their
                cards and the person with the highest combination, 21 or under,
                wins.
              </p>
              <p>
                If you&apos;re new to our online casino , learn how to play
                blackjack on Stake and refer to our guide that explains how to
                play casino card games for more helpful tips.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GameDetailsDropdown;
