// jQuery version:
const $song = $('<ul>');
$('body').append($song);
for (let i = 99; i >= 0; i--) {
  let $verse = $('<li>');
  if (i > 1) {
    $verse.text(
      i +
        ' bottles of beer on the wall, ' +
        i +
        ' bottles of beer, you take one down, pass it around, ' +
        (i - 1) +
        ' bottles of beer on the wall.'
    );
  } else if (i === 1) {
    $verse.text(
      i +
        ' bottle of beer on the wall, ' +
        i +
        ' bottle of beer, you take one down, pass it around, ' +
        (i - 1) +
        ' bottles of beer on the wall.'
    );
  } else {
    $verse.text(
      'No bottles of beer on the wall, no bottles of beer, go to the store, buy some more, 99 bottles of beer on the wall...'
    );
  }
  $song.append($verse);
}

//vanilla JS version:
// const song = document.createElement('ul');
// document.querySelector('body').append(song);
// for (let i = 99; i >= 0; i--) {
//   let verse = document.createElement('li');
//   if (i > 1) {
//     verse.textContent =
//       i +
//       ' bottles of beer on the wall, ' +
//       i +
//       ' bottles of beer, you take one down, pass it around, ' +
//       (i - 1) +
//       ' bottles of beer on the wall.';
//   } else if (i === 1) {
//     verse.textContent =
//       i +
//       ' bottle of beer on the wall, ' +
//       i +
//       ' bottle of beer, you take one down, pass it around, ' +
//       (i - 1) +
//       ' bottles of beer on the wall.';
//   } else {
//     verse.textContent =
//       'No bottles of beer on the wall, no bottles of beer, go to the store, buy some more, 99 bottles of beer on the wall...';
//   }
//   song.appendChild(verse);
// }
