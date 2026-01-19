const getCardValue = require("./3-get-card-value");

test("should return 11 for Ace of Spades", () => {
    const aceOfSpades = getCardValue("A♠");
    expect(aceOfSpades).toEqual(11);
    });

// Case 2: Handle Number Cards (2-10):
test("should return 5 for five of Hearts", () => {
    const fiveOfHearts = getCardValue("5♥");
    expect(fiveOfHearts).toEqual(5);
    });



// Case 3: Handle Face Cards (J, Q, K):
test("should return 10 for 10 of Diamonds", () => {
    const tenOfDiamonds = getCardValue("10♦");
    expect(tenOfDiamonds).toEqual(10);
});

test("should return 10 for Jack of Clubs", () => {
    const jackOfClubs = getCardValue("J♣");
    expect(jackOfClubs).toEqual(10);
});

test("should return 10 for Queen of Spades", () => {
    const queenOfSpades = getCardValue("Q♠");
    expect(queenOfSpades).toEqual(10);
});

test("should return 10 for King of Hearts", () => {
    const kingOfHearts = getCardValue("K♥");
    expect(kingOfHearts).toEqual(10);
});

// Case 4: Handle Ace (A):
// Case 5: Handle Invalid Cards:
test("should throw an error for an invalid card rank", () => {
    expect(() => getCardValue("X♠")).toThrow("Invalid card rank");
});
