const places = [3, 0, 2, -1, 5];

for (const place of places) {
  if (place < 0) {
    break
  }
  
  if (place == 0) {
    continue
  }

  console.log(place)
}
