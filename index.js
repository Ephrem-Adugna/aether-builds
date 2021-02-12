const form = document.getElementById('form');

function addchars() {
    const charactername = document.getElementById('charactername');
    const buildname = document.getElementById('buildname');
    const builddescription = document.getElementById('builddescription');
    const buildweapon = document.getElementById('buildweapon');
    const buildweaponstat = document.getElementById('buildweaponstat');
    const buildweaponbonus = document.getElementById('buildweaponbonus');
    const buildartifacts = document.getElementById('buildartifacts');
    const build = {
        characterName: charactername.value,
        buildName: buildname.value,
        buildDescription: builddescription.value,
        buildWeapon: buildweapon.value,
        buildWeaponStat: buildweaponstat.value,
        buildWeaponBonus: buildweaponbonus.value,
        buildArtifacts: buildartifacts.value.split(',')
    }
    let builddata = JSON.stringify(build, null, 2);
    document.getElementById('return').innerText = builddata;

}
function copy() {
    const element = document.getElementsByClassName('codecontainer')[0];
    var range, selection, worked;

    if (document.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
    var x = document.getElementById("snackbar");

    try {
        document.execCommand('copy');
        // Add the "show" class to DIV
        x.className = "show";

        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
    catch (err) {
        x.className = "show";
        x.innerText = "Unable to copy"
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }


   
}