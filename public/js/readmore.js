const readmore = document.body.querySelector('.readmore');
const aboutdrtext = document.body.querySelector('.parentp');

readmore.addEventListener('click', (e) => {


	let paras = document.createElement('span');
	let node = document.createTextNode(`Called a prophet to the nations coupled with his great love for people, he continues to lead an Apostolic Movement that is shaping the sphere of Christianity today and characterized by many supernatural manifestations, healing miracles, signs and wonders.
                                As a pastor and sought-after financial adviser, he has mentored many beyond his congregation into financial freedom and helps many more in business development and strategy for wealth creation as he facilitates in the Royal Pillars Money Academy. His expository teachings sandwiched with great illustrations and the power of the Holy Ghost has carved him a niche as an outstanding revelator of scriptures.
                                He is the Founder and Senior Pastor of the Gospel Pillars International Churches with Headquarters in Lagos Nigeria. He is the president of the Isaiah Wealth Ministries which is active in church planting and charity work in more than three continents of the world.
                                `)
	paras.appendChild(node)
	aboutdrtext.appendChild(paras);
	node.style.display = 'none';


})

const readmore = document.getElementById('readmore');
const aboutdrtext = document.body.querySelector('.parentp');

once = () => {


	let paras = document.createElement('span');
	let node = document.createTextNode(`Called a prophet to the nations coupled with his great love for people, he continues to lead an Apostolic Movement that is shaping the sphere of Christianity today and characterized by many supernatural manifestations, healing miracles, signs and wonders.
                                As a pastor and sought-after financial adviser, he has mentored many beyond his congregation into financial freedom and helps many more in business development and strategy for wealth creation as he facilitates in the Royal Pillars Money Academy. His expository teachings sandwiched with great illustrations and the power of the Holy Ghost has carved him a niche as an outstanding revelator of scriptures.
                                He is the Founder and Senior Pastor of the Gospel Pillars International Churches with Headquarters in Lagos Nigeria. He is the president of the Isaiah Wealth Ministries which is active in church planting and charity work in more than three continents of the world.
                                `)
	paras.appendChild(node)
	aboutdrtext.appendChild(paras);
	readmore.removeEventListener('click', once);
}

readmore.addEventListener('click', once);