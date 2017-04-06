function rasmify(arabicString) {

    /**
     * List of unicode characters that should be removed
     * '\u0615', '\u0617', '\u0618', '\u0619', '\u061A', '\u061E',
     * '\u0621',
     * '\u0640
     * '\u064B', '\u064C', '\u064D', '\u064F', '\u0650', '\u0651', '\u0652', '\u0653', '\u0654', '\u0655
     * '\u0656',
     * '\u0670',
     * '\u0674',
     * '\u06D6', '\u06D7', '\u06D8', '\u06D9', '\u06DA', '\u06DB', '\u06DC',
     * '\06DF', \u06E1', '\u06E2', '\u06E3', '\u06E4', '\u06E5', '\u06E6'
     * '\u06ED',
     **/
    var removeCharacterMap = /[\u0615-\u061e\u0621\u0640\u064b-\u0655\u0656\u0670\u0674\u06d6-\u06dc\u06df\u06e1-\u06e6\u06ed]/g;

    // Strip unwanted characters
    var rasmString = arabicString.replace(removeCharacterMap, "");


    rasmString = rasmString

        // Replace arabic letter alef wasla (\u0671) with arabic letter alef (\u0627)
        .replace(/\u0671/g, "\u0627")

        // Replace arabic letter teh (\u062A) with arabic letter dotless beh (\u066E)
        .replace(/\u062A/g, "\u066E")

        // Replace arabic letter teh marbuta (\u0629) with arabic letter heh (\u0647)
        .replace(/\u0629/g, "\u0647")

        // Replace arabic letter feh (\u0641) with arabic letter dotless feh (\u06A1)
        .replace(/\u0641/g, "\u06A1")

        // Replace arabic letter beh (\u0628) with arabic letter dotless beh (\u066E)
        .replace(/\u0628/g, "\u066E")

        // Replace arabic letter yeh (\u064A) with arabic letter alef maksura (\u0649)
        .replace(/\u064A/g, "\u0649")

        // Replace arabic letter kaf (\u0643) with arabic letter keheh (\u06A9)
        .replace(/\u0643/g, "\u06A9")

        // Replace arabic letter alef with hamza below (\u0625) with arabic letter alef (\u0627)
        .replace(/\u0625/g, "\u0627")

        // Replace arabic letter qaf (\u0642) with arabic letter dotless qaf (\u066F)
        .replace(/\u0642/g, "\u066F")

        // Replace arabic letter thal (\u0630) with arabic letter dal (\u062F)
        .replace(/\u0630/g, "\u062F")

        // Replace arabic letter alef with hamza above (\u0623) with arabic letter alef (\u0627)
        .replace(/\u0623/g, "\u0627")

        // Replace arabic letter ghain (\u063A) with arabic letter ain (\u0639)
        .replace(/\u063A/g, "\u0639")

        // Replace arabic letter dad (\u0636) with arabic letter sad (\u0635)
        .replace(/\u0636/g, "\u0635")

        // Replace arabic letter alef with madda above (\u0622) with arabic letter alef (\u0627)
        .replace(/\u0622/g, "\u0627")

        // Replace arabic letter sheen (\u0634) with arabic letter seen (\u0633)
        .replace(/\u0634/g, "\u0633")

        // Replace arabic letter jeem (\u062C) with arabic letter hah (\u062D)
        .replace(/\u062C/g, "\u062D")

        // Replace arabic letter zain (\u0632) with arabic letter reh (\u0631)
        .replace(/\u0632/g, "\u0631")

        // Replace arabic letter khah (\u062E) with arabic letter hah (\u062D)
        .replace(/\u062E/g, "\u062D")

        // Replace arabic letter theh (\u062B) with arabic letter dotless beh (\u066E)
        .replace(/\u062B/g, "\u066E")

        // Replace arabic letter zah (\u0638) with arabic letter tah (\u0637)
        .replace(/\u0638/g, "\u0637")

        // Replace arabic letter waw with hamza above (\u0624) with arabic letter waw (\u0648)
        .replace(/\u0624/g, "\u0648")

        // Replace arabic letter yeh with hamza above (\u0626) with arabic letter dotless beh (\u066E)
        .replace(/\u0626/g, "\u066E")

        // Replace arabic letter noon (\u0646) with arabic letter noon ghunna (\u06BA)
        .replace(/\u0646/g, "\u06BA")

        // Replace arabic letter farsi yeh (\u06CC) with arabic letter alef maksura (\u0649)
        .replace(/\u06CC/g, "\u0649")

        // Insert zero-width-joiner (\u200D) into lam lam ha to avoid wrong ligatures
        .replace(/\u0644\u0644\u0647/g, "\u0644\u0644\u200D\u0647");

    return rasmString.trim();
}

module.exports = rasmify;
