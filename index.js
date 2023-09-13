const quoteElement = document.getElementById('quote')

const quotes = [
    '"You can change fate as long as you believe you can."<br/> - Rika',
    '"Nipah!"',
    '"Man cannot forgive mans sins. But I can forgive your sins."<br/> - Hanyu',
    `"I just wanted to be told... 'It's okay to live.'"<br/> - Miyo`,
    `"Are you watching, Nii-nii? Satoko has become this much stronger!"<br/> - Satoko`,
    `"We will break this so called 'fate', together."<br/> - Keiichi`,
    `"Everyone's days of happiness are limited."<br/> - Rena`,
    `"オもちいかえり ('I want to take it home!')"`
]

var seed = Math.floor(Math.random() * 7); // 1-6
// console.warn(seed)
quoteElement.innerHTML = quotes[seed];