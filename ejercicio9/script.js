const topics =['Javascripts', 'Variables','funciones', 'condicionales', 'bucles'];

const capitalizeTopics = topics.map(eachTopic => eachTopic.toUpperCase());
capitalizeTopics.reverse();
console.log('topics', topics);
console.log('capitalizeTopics', capitalizeTopics);