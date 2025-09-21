export const factsStore = {
    facts: [],
    setFacts(newFacts) {
        this.facts = newFacts;
    },
    getFactById(id) {
        return this.facts.find((f) => f.id === parseInt(id));
    },
};
