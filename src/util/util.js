export function getHamsterIndex(hamsterList, updatedHamsterId) {
  return hamsterList.findIndex((element) => {
    return element.id === updatedHamsterId;
  });
}