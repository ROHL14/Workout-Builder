const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Workout-Builder"
);

const exerciseSeed = [
  {
    name: "Barbell Calf Raise",
    muscle: "Calves",
    description:
      "Place a block, step, or weight plate on the floor. Grasp a barbell and hold it on the backs of your shoulders, as in a squat. Place your toes on the block so your calves are stretched, but make sure you can maintain balance. Raise your heels to come up onto the balls of your feet."
  },
  {
    name: "Seated Calf Raise",
    muscle: "Calves",
    description:
      "Use a seated calf raise machine, or sit on a bench and rest the balls of your feet on a block or step (and hold dumbbells on your thighs for resistance). Perform a calf raise as described at left, but with hips and knees bent 90 degrees."
  },
  {
    name: "Ab Wheel Rollout",
    muscle: "Abs",
    description:
      "Kneel on the floor and hold an ab wheel beneath your shoulders. Brace your abs and roll the wheel forward until you feel you’re about to lose tension in your core and your hips might sag. Roll yourself back to start. Do as many reps as you can with perfect form and end the set when you think you might break form."
  },

  {
    name: "Arms-High Partial Situp",
    muscle: "Abs",
    description:
      "Lie on your back, knees bent at 90 degrees, and raise your arms straight overhead, keeping them pointing up throughout the exercise. Sit up halfway, then steadily return to the floor. That’s one rep."
  },
  {
    name: "Squat",
    muscle: "Legs",
    description:
      "In a squat rack or cage, grasp the bar as far apart as is comfortable and step under it. Place it on your lower traps, squeeze your shoulder blades together, push your elbows up and nudge the bar out of the rack. Take a step or two back and stand with your feet at shoulder width and your toes turned slightly out. Take a deep breath and bend your hips back, then bend your knees to lower your body as far as you can without losing the arch in your lower back. Push your knees out as you descend. Drive vertically with your hips to come back up, continuing to push your knees out."
  },
  {
    name: "Bulgarian Split Squat",
    muscle: "Legs",
    description:
      "Stand lunge-length in front of a bench. Hold a dumbbell in each hand and rest the top of your left foot on the bench behind you. Lower your body until your rear knee nearly touches the floor and your front thigh is parallel to the floor. Single-leg training can yield serious strength gains"
  },
  {
    name: "Reverse Curl",
    muscle: "Forearm",
    description:
      "Grasp the bar overhand at whatever width is comfortable. Keeping your upper arms against your sides, curl the bar."
  },
  {
    name: "Wrist Curl",
    muscle: "Forearm",
    description:
      "Hold a dumbbell in each hand and sit on a bench, box, or chair. Rest your forearmsOpens a New Window. on your thighs and allow your wrists to bend back over your knees so the weights hang down. Curl the dumbbells up by just flexing your wrists"
  },
  {
    name: "Hammer Curl",
    muscle: "Biceps",
    description:
      "Perform as you did the conventional dumbbell curl but keep your palms facing your sides throughout (aka neutral grip)."
  },
  {
    name: "Behind-the-Back Cable Curl",
    muscle: "Biceps",
    description:
      "Attach a D-handle to the low pulley of a cable machine, grasp the handle in your left hand, and step forward (away from the machine) until there’s tension on the cable and your arm is drawn slightly behind your body. Stagger your feet so your right leg is in front. Curl the handle but don’t allow your elbow to point forward. Alternate sides."
  },
  {
    name: "Lying Triceps Extension",
    muscle: "Triceps",
    description:
      "Press the bar over your chest, then let your upper arms drift back to about a 45° angle. Bend your elbows to lower the bar behind your head, then extend them to return to the starting position. Keep your elbows in line with your wrists throughout."
  },
  {
    name: "Underhand Kickback",
    muscle: "Triceps",
    description:
      "Stand holding a dumbbell in each hand and drop your hips back, lowering your torso until it’s almost parallel to the floor. Turn your palms to face in front of you, and, keeping your upper arms against your sides, extend your elbows until your arms are parallel to your torso."
  },
  {
    name: "Barbell Hip Thrust",
    muscle: "Glutes",
    description:
      "Rest your upper back on a bench and sit on the floor with legs extended. Roll a loaded barbell up your thighs until the bar sits on your lap (you may want to place a towel or mat on your hips or attach a pad to the bar for comfort). Brace your abs and drive your heels into the floor to extend your hips, raising them until your thighs and upper body are parallel to the floor. "
  },
  {
    name: "Front Squat",
    muscle: "Glutes",
    description:
      "Set a barbell on a power rack at about shoulder height. Grab the power with an overhand grip at shoulder width and raise your elbows until your upper arms are parallel to the floor. Take the bar out of the rack and let it rest on your fingertips. Your elbows should be all the way up throughout the movement. Step back and set your feet at shoulder width with toes turned out slightly. Squat as low as you can without losing the arch in your lower back."
  },
  {
    name: "Barbell Bench Press",
    muscle: "Chest",
    description:
      "Grasp the bar just outside shoulder-width and arch your back so there’s space between your lower back and the bench. Pull the bar out of the rack and lower it to your sternum, tucking your elbows about 45° to your sides. When the bar touches your body, drive your feet hard into the floor and press the bar back up."
  },
  {
    name: "Incline Dumbbell Press",
    muscle: "Chest",
    description:
      "Set an adjustable bench to a 30°-45° angle and lie back on it with a dumbbell in each hand at shoulder-level. Press the weights over your chest."
  },
  {
    name: "Bent-Over Underhand Barbell Row",
    muscle: "Back",
    description:
      "Grab a barbell with an underhand grip that’s just beyond shoulder width, and hold it at arm’s length. Lower your torso until it’s almost parallel to the floor, and bend at your hips and knees. Let the bar hang at arm’s length. Pull the bar to your upper abs as you squeeze your shoulder blades together. Pause, and slowly lower the bar back to the starting position."
  },
  {
    name: "Pullup or Chinup Variations",
    muscle: "Back",
    description:
      "Grab the bar with a shoulder-width, then pull your chest to the bar."
  },
  {
    name: "Barbell Overhead Press",
    muscle: "Shoulders",
    description:
      "Set the bar up in a squat rack or cage, and grasp it just outside shoulder width. Take the bar off the rack and hold it at shoulder level with your forearms perpendicular to the floor. Squeeze the bar and brace your abs.Opens a New Window. Press the bar overhead, pushing your head forward and shrugging your traps as the bar passes your face."
  },
  {
    name: "Face Pull",
    muscle: "Shoulders",
    description:
      "Attach a rope handle to the top pulley of a cable station.Opens a New Window. Grasp an end in each hand with palms facing each other. Step back to place tension on the cable. Pull the handles to your forehead so your palms face your ears and your upper back is fully contracted."
  },
  {
    name: "Barbell Shrug",
    muscle: "Traps",
    description:
      " Grab a barbell with an overhand grip that’s just beyond shoulder-width apart, and let the bar hang at arm’s length in front of your waist. Keeping your back naturally arched, lean forward at your hip about 10 degrees. Bend your knees slightly. Now shrug your shoulders toward your ears as high as you can. Your arms should be straight. Pause, then reverse the movement back to the starting position."
  },
  {
    name: "Farmer's Carry",
    muscle: "Traps",
    description:
      "Hold a weight (dumbbells or kettlebells will do) in each hand at your sides. Engage your core and back, holding a strong, upright posture. Take even, measured steps, controlling the weight and maintaining your posture for either a set time or distance."
  }
];

db.Exercise.remove({})
  .then(() => db.Exercise.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
