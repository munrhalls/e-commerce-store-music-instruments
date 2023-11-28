// download 4 users in such a way that one if after another, and only in that order but the 3rd user is admin so he is always priority and comes as soon as delivered by the server

const dlUsers = async () => {
  const user1 = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data1 = await user1.json();
  console.log(data1.name);

  const user2 = await fetch('https://jsonplaceholder.typicode.com/users/2');
  const data2 = await user2.json();
  console.log(data2.name);

  const user3 = await fetch('https://jsonplaceholder.typicode.com/users/3');
  const data3 = await user3.json();
  console.log(data3.name);

  const user4 = await fetch('https://jsonplaceholder.typicode.com/users/4');
  const data4 = await user4.json();
  console.log(data4.name);
};
dlUsers();
