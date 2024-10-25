const binarySearch = (arr, k, l, u) => {
  if (u >= l) {
    let mid = Math.floor((l + u) / 2);

    if (arr[mid] === k) {
      return mid;
    }

    if (arr[mid] > k) {
      return binarySearch(arr, k, l, mid - 1);
    }

    return binarySearch(arr, k, mid + 1, u);
  }
  return -1;
};

console.log(binarySearch([1, 2, 3, 4], 2, 0, [1, 2, 3, 4].length - 1));
