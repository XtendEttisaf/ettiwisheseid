var name = prompt("তোমার নামটা বল (বাংলায়):");

if (name=="") {
    document.getElementById('wishName').innerHTML ="যদি নাম যে না বলিস তাহলে কি Jonny বলে উইশ করবো?"
} else {
    document.getElementById('wishName').innerHTML = name + " কে 'ইত্তিসাফ রূপ' এর পক্ষ থেকে \n &hearts; ঈদ মোবারাক &hearts;"

}
