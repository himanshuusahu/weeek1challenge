/**
 * HeritageScribe AI - MongoDB Atlas Vector Search Store
 */

export class MongoAtlasVectorStore {
  constructor() {
    this.recipes = [
      {
        id: 'rec_1',
        title: "Grandpa Joe's 6-Hour Sunday Marinara",
        chef: "Grandpa Joe",
        year: "1978",
        origin: "Little Italy, NYC & Naples",
        image: "/assets/marinara.png",
        category: "Main Course",
        tags: ["Italian", "Heirloom", "Gluten-Free", "Comfort Food", "Slow-Cooked"],
        prepTime: "20 mins",
        cookTime: "3-4 hours",
        servings: 6,
        audioDuration: "1:42",
        transcript: "Listen kiddo, the secret to my marinara isn't just the tomatoes, though you gotta use San Marzano from the yellow can. It's the garlic! You slice it paper-thin like Paulie in Goodfellas, don't chop it! Heat three tablespoons of cold-pressed olive oil in a heavy Dutch oven, throw in four whole cloves of garlic sliced paper thin, and half a teaspoon of crushed red pepper flakes. Don't let the garlic brown, just let it sizzle till it smells like Sunday morning. Then pour in two 28-ounce cans of whole San Marzano tomatoes crushed by hand, half a glass of dry red wine—whatever dry cabernet or chianti you're drinking—a big pinch of sea salt, fresh cracked black pepper, and two whole sprigs of fresh basil right on top. Simmer it low for at least 3 to 4 hours, stirring every half hour. Right at the end, stir in one tablespoon of cold salted butter. Don't skip the butter! That's what gives it that silky restaurant shine.",
        audioTimestamps: [
          { time: "0:00", text: "Listen kiddo, the secret to my marinara isn't just the tomatoes..." },
          { time: "0:15", text: "Slice four cloves garlic paper-thin like Paulie in Goodfellas!" },
          { time: "0:35", text: "Sizzle in 3 tbsp olive oil with 1/2 tsp red pepper flakes." },
          { time: "0:52", text: "Add two 28oz cans San Marzano tomatoes, crushed by hand." },
          { time: "1:10", text: "Pour in 1/2 glass dry red wine, sea salt, black pepper & basil." },
          { time: "1:28", text: "Simmer 3-4 hours. Finish with 1 tbsp cold salted butter for shine." }
        ],
        ingredients: [
          { amount: 3, unit: "tbsp", item: "Extra virgin olive oil (cold-pressed)" },
          { amount: 4, unit: "cloves", item: "Garlic, paper-thin sliced" },
          { amount: 0.5, unit: "tsp", item: "Crushed red pepper flakes" },
          { amount: 2, unit: "cans (28 oz)", item: "Whole San Marzano tomatoes (DOP)" },
          { amount: 0.5, unit: "cup", item: "Dry red wine (Chianti or Cabernet)" },
          { amount: 1, unit: "tsp", item: "Coarse sea salt" },
          { amount: 0.5, unit: "tsp", item: "Freshly cracked black pepper" },
          { amount: 2, unit: "sprigs", item: "Fresh Italian sweet basil" },
          { amount: 1, unit: "tbsp", item: "Cold salted butter" }
        ],
        instructions: [
          { step: 1, text: "Slice garlic paper-thin using a razor knife." },
          { step: 2, text: "In a Dutch oven, sizzle garlic and red pepper flakes in olive oil for 2 minutes." },
          { step: 3, text: "Hand crush San Marzano tomatoes into the pot." },
          { step: 4, text: "Add red wine, sea salt, pepper, and fresh basil sprigs." },
          { step: 5, text: "Simmer on low heat for 3 to 4 hours." },
          { step: 6, text: "Whisk in cold salted butter before serving for restaurant shine." }
        ],
        secretMemory: "Grandpa Joe recorded this in 2019 while making Sunday dinner. He learned this recipe in Little Italy back in 1978.",
        winePairing: "Chianti Classico Riserva",
        vectorEmbedding: [0.12, 0.45, 0.88, 0.23, 0.67] // Mock Atlas Vector Search embedding
      },
      {
        id: 'rec_2',
        title: "Grandma Clara's Braided Cinnamon & Cardamom Babka",
        chef: "Grandma Clara",
        year: "1962",
        origin: "Krakow & Lower East Side, NY",
        image: "/assets/babka.png",
        category: "Bakery",
        tags: ["Heirloom", "Baking", "Sweet", "Jewish Heritage", "Holiday"],
        prepTime: "45 mins (+ 2 hr rise)",
        cookTime: "35 mins",
        servings: 10,
        audioDuration: "2:15",
        transcript: "My mother taught me this babka in 1962 when we lived on Essex Street. The secret to the dough is patience and warm whole milk. You take 4 cups of bread flour, half a cup of warm whole milk with a package of active dry yeast and a tablespoon of honey. Let it foam up for 10 minutes. Then beat in 3 large egg yolks, a third cup of sugar, and 10 tablespoons of unsalted butter at room temperature, bit by bit. Knead it till it's silky like a baby's cheek. For the swirl, melt dark 70% Dutch chocolate with 4 tablespoons of butter, half a cup of brown sugar, two teaspoons of cinnamon, and half a teaspoon of finely crushed green cardamom. Cardamom is the secret ingredient nobody guesses! Roll the risen dough flat, spread the chocolate mix, roll it into a tight log, slice it down the middle lengthwise, and braid the two ropes over each other. Bake at 375 degrees Fahrenheit for 35 minutes until golden brown. Brush with warm honey sugar syrup as soon as it comes out of the oven!",
        audioTimestamps: [
          { time: "0:00", text: "My mother taught me this babka in 1962 on Essex Street..." },
          { time: "0:25", text: "Proof yeast in 1/2 cup warm milk with 1 tbsp honey." },
          { time: "0:50", text: "Mix 4 cups bread flour, 3 egg yolks, 1/3 cup sugar, and 10 tbsp soft butter." },
          { time: "1:20", text: "Make filling: Dark 70% chocolate, brown sugar, cinnamon, and crushed cardamom!" },
          { time: "1:45", text: "Roll tight, slice lengthwise, braid ropes, and bake at 375°F for 35 mins." }
        ],
        ingredients: [
          { amount: 4, unit: "cups", item: "Unbleached bread flour" },
          { amount: 0.5, unit: "cup", item: "Warm whole milk (110°F)" },
          { amount: 1, unit: "pkg", item: "Active dry yeast" },
          { amount: 1, unit: "tbsp", item: "Wildflower honey" },
          { amount: 3, unit: "large", item: "Egg yolks" },
          { amount: 0.33, unit: "cup", item: "Granulated sugar" },
          { amount: 10, unit: "tbsp", item: "Unsalted butter (room temp)" },
          { amount: 200, unit: "g", item: "Dark 70% Dutch cocoa chocolate" },
          { amount: 0.5, unit: "cup", item: "Dark brown sugar" },
          { amount: 2, unit: "tsp", item: "Ground Saigon cinnamon" },
          { amount: 0.5, unit: "tsp", item: "Freshly crushed green cardamom" }
        ],
        instructions: [
          { step: 1, text: "Proof yeast with warm milk and honey." },
          { step: 2, text: "Knead flour, egg yolks, sugar, and butter into silky dough." },
          { step: 3, text: "Rise for 2 hours. Melt chocolate, butter, sugar, cinnamon, and cardamom." },
          { step: 4, text: "Roll flat, spread filling, roll log, cut lengthwise, and braid." },
          { step: 5, text: "Bake at 375°F for 35 minutes. Brush with warm honey syrup." }
        ],
        secretMemory: "Grandma Clara brought this recipe from Krakow in 1962. Cardamom is her signature secret twist.",
        winePairing: "Espresso or Port Wine",
        vectorEmbedding: [0.91, 0.12, 0.34, 0.78, 0.55]
      },
      {
        id: 'rec_3',
        title: "Uncle Bob's 1974 Hickory Smoked BBQ Rub & Ribs",
        chef: "Uncle Bob",
        year: "1974",
        origin: "Kansas City, Missouri",
        image: "/assets/bbq_ribs.png",
        category: "Barbecue",
        tags: ["BBQ", "Smoky", "American", "Gluten-Free", "Low & Slow"],
        prepTime: "25 mins",
        cookTime: "6 hours",
        servings: 4,
        audioDuration: "1:55",
        transcript: "Back in the summer of '74 at the Kansas City county fair, old man Miller gave me this rub recipe behind the smoker pit. Don't bother buying store-bought rub again! Mix half a cup of dark brown sugar, two tablespoons of smoked Spanish paprika, one tablespoon of coarse kosher salt, one tablespoon of freshly ground coarse black pepper, one teaspoon of garlic powder, one teaspoon of onion powder, half a teaspoon of cayenne pepper, and half a teaspoon of ground yellow mustard seed. Pat two racks of St. Louis style pork ribs bone dry, pull the membrane off the back—always remove that silver membrane!—and rub it liberally on both sides. Smoke over hickory wood chunks at 225 degrees Fahrenheit for 3 hours, then wrap tightly in butcher paper with a splash of apple cider vinegar for 2 hours, and unwrap for the final hour to set the crispy caramelized bark. They'll fall clean off the bone!",
        audioTimestamps: [
          { time: "0:00", text: "Back in summer of '74 at Kansas City fair..." },
          { time: "0:20", text: "Mix brown sugar, smoked paprika, kosher salt & black pepper." },
          { time: "0:45", text: "Add garlic powder, onion powder, cayenne & ground mustard seed." },
          { time: "1:10", text: "Peel silver membrane off pork ribs! Rub thoroughly." },
          { time: "1:30", text: "Smoke at 225°F using 3-2-1 method." }
        ],
        ingredients: [
          { amount: 2, unit: "racks", item: "St. Louis style pork ribs" },
          { amount: 0.5, unit: "cup", item: "Dark brown sugar" },
          { amount: 2, unit: "tbsp", item: "Smoked Spanish paprika" },
          { amount: 1, unit: "tbsp", item: "Coarse Kosher salt" },
          { amount: 1, unit: "tbsp", item: "Coarse black pepper" },
          { amount: 1, unit: "tsp", item: "Garlic powder" },
          { amount: 1, unit: "tsp", item: "Onion powder" },
          { amount: 0.5, unit: "tsp", item: "Cayenne pepper" },
          { amount: 0.5, unit: "tsp", item: "Ground yellow mustard seed" }
        ],
        instructions: [
          { step: 1, text: "Mix dry spices and brown sugar in a bowl." },
          { step: 2, text: "Peel silver membrane from back of ribs." },
          { step: 3, text: "Apply rub liberally. Smoke at 225°F for 3 hours." },
          { step: 4, text: "Wrap in butcher paper with apple cider vinegar for 2 hours." },
          { step: 5, text: "Unwrap and smoke for 1 final hour to set bark." }
        ],
        secretMemory: "Uncle Bob won 1st place at the 1979 Missouri State Smokeoff using this rub.",
        winePairing: "Craft IPA or Zinfandel",
        vectorEmbedding: [0.33, 0.77, 0.11, 0.44, 0.99]
      }
    ];
  }

  async getRecipes() {
    return this.recipes;
  }

  async addRecipe(newRecipe) {
    this.recipes.unshift(newRecipe);
    return newRecipe;
  }

  /**
   * MongoDB Atlas Vector Search matching simulation
   */
  async vectorSearch(queryText, topK = 2) {
    const qLower = queryText.toLowerCase();
    const results = this.recipes.filter(r => 
      r.title.toLowerCase().includes(qLower) ||
      r.transcript.toLowerCase().includes(qLower) ||
      r.chef.toLowerCase().includes(qLower) ||
      r.tags.some(t => t.toLowerCase().includes(qLower))
    );

    return results.length > 0 ? results.slice(0, topK) : [this.recipes[0]];
  }
}

export const db = new MongoAtlasVectorStore();
