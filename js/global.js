// Fonts.
let pixel = undefined;

// Objects.
let Ship = undefined;
let Camera = undefined;

// Object arrays.
let stars = [];
let bullets = [];
let enemies = [];

// Miscellaneous.

let ftl_engine_main = 0.0;
let ftl_engine_sub = 0.0;

let state = 0;

// States.
const INTRO = 0;
const GAME = 1;
const LOSE = 2;
const WIN = 3;

let context = undefined;

let shake_angle = 0.0;
let shake_length = 0.5;

let shake_x = 0.0;
let shake_y = 0.0;

let bigger_shake = false;

let bigger_shake_angle = 0.0;
let bigger_shake_length = 2;

let bigger_shake_x = 0.0;
let bigger_shake_y = 0.0;

let shake_ticks = 0;

let sector = [];

let sector_lower_limit = -299;
let sector_upper_limit = 299;

let enemy_identifier = 0;
let bullet_identifier = 0;

let ready_to_use_ftl = false;

let engage_ftl = false;

let fade_ticks = 0;

let enemies_defeated = 0;
let enemies_suicided = 0;

function getRandomNumber() {

  return Math.random() * 100000 | 0;
}
