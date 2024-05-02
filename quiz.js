// class RecommendationSystem {
//     constructor(userData) {
//         this.userData = userData; 
//     }
//     getRecommendations(userId) {
//         if(userId===userData)  {
//             console.log(userData);
        
//             return userData}
//             {
//                 return "search not found"
//             }
//     }
// }
// // Example items
// const userData = {
//     "user1": ["colgate", "soap", "kettle"],
//     "user2": ["cookies", "candy", "flour"],

// };
// const recommendationSystem = new RecommendationSystem(userData);
// const userId = "user1";
// const recommendations = recommendationSystem.getRecommendations(userId);
// console.log(recommendations());


const userPreferences = {};
//adding user
function addUser(userId, preferredCategories) {
    userPreferences[userId] = preferredCategories;
}
function getRecommendations(userId) {
    const preferredCategories = userPreferences[userId];
    if (!preferredCategories) return [];
    // reccomendations
    const recommendations = [];
    preferredCategories.forEach(category => {
        recommendations.push(`Item:${category}`);
        recommendations.push(`Item: ${category}`);
    });
    return recommendations;
}

addUser("user1", ["Electronics", "Fashion"]);
addUser("user2", ["Books"]);
console.log(`Recommendations for user1: ${getRecommendations("user1")}`);
console.log(`Recommendations for user2: ${getRecommendations("user2")}`);