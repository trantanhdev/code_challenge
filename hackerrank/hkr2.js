let board;

function solution(s) {
  let counter = [];

  let l = s.length;
  if (1 === l) {
    return "YES";
  }

  for (let y = 0; y < l; ++y) {
    let p = s.charCodeAt(y) - 97;
    if (counter[p]) {
      counter[p] += 1;
    } else {
      counter[p] = 1;
    }
  }

  let cl = counter.length;

  if (2 === cl) {
    return 1 >= Math.abs(counter[0] - counter[1]) ? "YES" : "NO";
  } else {
    console.dir(counter);
    let c = {};
    for (let x = 0; x < cl; ++x) {
      if (counter[x]) {
        let val = counter[x];
        if (c.hasOwnProperty(val)) {
          c[val] += 1;
        } else {
          c[val] = 1;
        }
      }
    }

    console.dir(c);
    let keys = Object.keys(c);
    let kNumber = keys.length;
    if (1 === kNumber) {
      return "YES";
    }

    if (3 <= kNumber) {
      return "NO";
    }

    let key1 = keys[0];
    let key2 = keys[1];
    if (1 == key1) {
      let val1 = c[key1];
      if (1 === val1) {
        return "YES";
      }
    }

    if (1 == key2) {
      let val2 = c[key2];
      if (1 === val2) {
        return "YES";
      }
    }

    if (1 < Math.abs(key1 - key2)) {
      return "NO";
    }

    return "YES";
  }
}

function test(str) {
  const nStr = `"${str}" ===> ${solution(str)}`;
  const pElement = document.createElement("p");
  pElement.append(nStr);
  board.appendChild(pElement);
}

function main() {
  board = document.getElementById("board");
  //test("aaaaabc");
  test("aaaabbcc");
  // test("abbb");
  // test("abc");
  // test("aabbc");
  // test("aabbcd");
  // test("aabbccddeefghi");
  // test("abcdefghhgfedecba");
  // test(
  //   "ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd"
  // );
}
