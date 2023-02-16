let randomNumArr = [];
let memberArr = [];

const getRandomNum = () => {
  return Math.floor(Math.random() * 7 + 1);
};

const checkDuplicate = (num) => {
  return randomNumArr.indexOf(num) !== -1;
};

const generateNum = (arr) => {
  let num = getRandomNum();
  while (checkDuplicate(num)) {
    num = getRandomNum();
  }
  arr.push(num);
};

const getMember = (e) => {
  e.target.disabled = true;
  generateNum(randomNumArr);
  const name = e.target.parentNode.firstChild.nodeValue.trim();
  const length = randomNumArr.length;
  memberArr.push(`${randomNumArr[length - 1]}.${name}`);
};

const clickBtns = document.querySelectorAll('.getNumBtn');
clickBtns.forEach((btn) => {
  btn.addEventListener('click', getMember);
});

const memberList = document.querySelector('.memberList');
const showMembersBtn = document.querySelector('.showMembersBtn');

showMembersBtn.addEventListener('click', () => {
  getGroupList(memberArr);
});

const groups = {
  groupA: [],
  groupB: [],
  groupC: [],
  groupD: [],
  groupE: [],
};

const groupAList = document.querySelector('.groupA');
const groupBList = document.querySelector('.groupB');
const groupCList = document.querySelector('.groupC');
const groupDList = document.querySelector('.groupD');
const groupEList = document.querySelector('.groupE');

const getGroupList = (arr) => {
  const groupArr = [...arr].sort();
  let { groupA, groupB, groupC, groupD, groupE } = groups;
  groupA = groupArr.splice(0, 2);
  groupB = groupArr.splice(0, 2);
  groupC = groupArr.splice(0, 3);
  groupD = [...groupA, ...groupB];
  groupE = [...groupC];

  renderGroup(groupA, groupAList);
  renderGroup(groupB, groupBList);
  renderGroup(groupC, groupCList);
  renderGroup(groupD, groupDList);
  renderGroup(groupE, groupEList);
};

const renderGroup = (arr, area) => {
  let str = '';
  arr.map((member) => {
    str += `<li>${member}</li>`;
  });
  area.innerHTML = str;
};
