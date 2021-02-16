const r = Number(prompt("Enter the circle radius:"));
const circle = {
    radius: r,
    circumference: function() {
        return Math.PI * 2 * r;
    },
    area: function() {
        return Math.PI * r * r;
    }

};
console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);