import React, { useContext, useState } from "react";
import { Context } from "../../context/CreateContext";
import Button from "../Button";
import GameOfThronesImage from "../../assets/GameOfThrones.png";
import ClashOfKingsImage from "../../assets/ClashOfKings.png";
import StormOfSwordsImage from "../../assets/StormOfSwords.png";
import HedgeKnightImage from "../../assets/HedgeKnight.png";
import FeastForCrowsImage from "../../assets/FeastForCrows.png";
import SwornSwordImage from "../../assets/SwornSword.png";
import MysteryKnightImage from "../../assets/MysteryKnight.png";
import DanceWithDragonsImage from "../../assets/DanceWithDragons.png";

export default function SearchResult() {
    const { books2, addItemToCart  } = useContext(Context);
    const [showInfo, setShowInfo] = useState(false);

    const bookImages = {
      "A Game of Thrones": GameOfThronesImage,
      "A Clash of Kings": ClashOfKingsImage,
      "A Storm Of Swords": StormOfSwordsImage,
      "The Hedge Knight": HedgeKnightImage,
      "A Feast For Crows": FeastForCrowsImage,
      "The Sworn Sword": SwornSwordImage,
      "The Mystery Knight": MysteryKnightImage,
      "A Dance with Dragons": DanceWithDragonsImage,
    };
    const bookInfo = {
        "A Game of Thrones": "Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys.",
        "A Clash of Kings": "Time is out of joint. The summer of peace and plenty, ten years long, is drawing to a close, and the harsh, chill winter approaches like an angry beast. Two great leaders—Lord Eddard Stark and Robert Baratheon—who held sway over an age of enforced peace are dead . . . victims of royal treachery. Now, from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns, as pretenders to the Iron Throne of the Seven Kingdoms prepare to stake their claims through tempest, turmoil, and war. As a prophecy of doom cuts across the sky—a comet the color of blood and flame—six factions struggle for control of a divided land. Eddard’s son Robb has declared himself King in the North. In the south, Joffrey, the heir apparent, rules in name only, victim of the scheming courtiers who teem over King’s Landing. Robert’s two brothers each seek their own dominion, while a disfavored house turns once more to conquest. And a continent away, an exiled queen, the Mother of Dragons, risks everything to lead her precious brood across a hard hot desert to win back the crown that is rightfully hers. Against a backdrop of incest and fratricide, alchemy and murder, the price of glory may be measured in blood. And the spoils of victory may just go to the men and women possessed of the coldest steel . . . and the coldest hearts. For when rulers clash, all of the land feels the tremors.",
        "A Storm Of Swords": "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, the victim of the jealous sorceress who holds him in her evil thrall. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Robb plots against his despised Lannister enemies, even as they hold his sister hostage at King’s Landing, the seat of the Iron Throne. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world. . . . But as opposing forces maneuver for the final titanic showdown, an army of barbaric wildlings arrives from the outermost line of civilization. In their vanguard is a horde of mythical Others—a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords. . . .",
        "The Hedge Knight": "Set one hundred years before the events in George R.R. Martin's epic fantasy series, A Song of Ice and Fire, The Hedge Knight chronicles a young squire as he travels the cruel and complex path to knighthood in the Seven Kingdoms. Shouldering his fallen master's sword and shield, Duncan (or 'Dunk') is determined to reinvent himself as a knight in a nearby tournament. But first Dunk needs a sponsor, and that requirement sends him down a road studded with friends, foes, adventure, and hidden agendas. One such friend is Egg, who becomes Dunk's squire, yet even he may hold secret motivations of his own. In this gripping prequel, Dunk and Egg seek glory in a world both familiar and new to Game of Thrones fans. What the two fortune seekers encounter, however, is a world of distrust and political machinations. Chivalry is not lost while Dunk holds fast to his dreams of honor. But such outdated virtues make him a target--and they may even lead to his ruin. This vivid and elaborately wrought tale brings new dimension to George R. R. Martin's beloved world.",
        "A Feast For Crows": "It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce. Or so it appears. . . . With the death of the monstrous King Joffrey, Cersei is ruling as regent in King’s Landing. Robb Stark’s demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom like seeds on barren soil. Few legitimate claims to the once desperately sought Iron Throne still exist—or they are held in hands too weak or too distant to wield them effectively. The war, which raged out of control for so long, has burned itself out. But as in the aftermath of any climactic struggle, it is not long before the survivors, outlaws, renegades, and carrion eaters start to gather, picking over the bones of the dead and fighting for the spoils of the soon-to-be dead. Now in the Seven Kingdoms, as the human crows assemble over a banquet of ashes, daring new plots and dangerous new alliances are formed, while surprising faces—some familiar, others only just appearing—are seen emerging from an ominous twilight of past struggles and chaos to take up the challenges ahead. It is a time when the wise and the ambitious, the deceitful and the strong will acquire the skills, the power, and the magic to survive the stark and terrible times that lie before them. It is a time for nobles and commoners, soldiers and sorcerers, assassins and sages to come together and stake their fortunes . . . and their lives. For at a feast for crows, many are the guests—but only a few are the survivors.",
        "The Sworn Sword": "Set one hundred years before the events in George R.R. Martin's epic fantasy series, A Song of Ice and Fire, The Sworn Sword follows the adventures of Ser Duncan and his squire, Egg, as they quest for honor and glory in the Seven Kingdoms. After the deaths, surprises, and heroics in The Hedge Knight, Dunk and Egg continue their journey in search of the fair puppeteer Tanselle. Along the way, the elderly knight Ser Eustace takes both men under his charge, alongside another knight--and this one promises trouble. Peace is ever elusive for Dunk and Egg, as they are soon embroiled in the schemes of local nobility, while a darker, greater thread threatens to unravel long-held truths of the Battle of Redgrass Field. In classic George R.R. Martin fashion, heroes and villains are never clear-cut, and political alliances threaten to slice the deepest. Yet one path lies ahead for Dunk and Egg: onward toward destiny. Join them as they venture along a now-familiar world but in a time all-new!",
        "The Mystery Knight": "Westeros is eerily peaceful. King Aerys I sits on the Iron Throne. A ravaging plague has abated. Yet beneath the surface, tensions linger sixteen years after a failed rebellion. In these restless times, noble hedge knight Ser Duncan the Tall—Dunk, to his friends—and his precocious boy squire, Egg, travel the Seven Kingdoms performing chivalrous deeds, though Egg’s bloodline must be concealed at all costs. After heading north for Winterfell, Dunk and Egg are lured off the kingsroad by a wedding feast—and an unusually lucrative tournament. The champion jouster will claim a rare trophy indeed: a dragon’s egg. Dunk, always better in a melee, would be satisfied with a hot meal, a cup of wine, and a purse full of coins. But a treasonous plot is more likely to hatch before another dragon ever stretches its wings. Someone’s on to Egg. And a mystery knight with designs on an even bigger prize soon throws the entire affair into chaos.",
        "A Dance with Dragons": "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance once again - beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has three times 3,000 enemies, and many have set out to find her. Yet, as they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind.  To the north lies the mammoth Wall of ice and stone - a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Nights Watch, will face his greatest challenge yet. For he has powerful foes not only within the Watch but also beyond, in the land of the creatures of ice. And from all corners, bitter conflicts soon reignite, intimate betrayals are perpetrated, and a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, will face seemingly insurmountable obstacles. Some will fail, others will grow in the strength of darkness. But in a time of rising restlessness, the tides of destiny and politics will lead inevitably to the greatest dance of all.",
        "The Princess and the Queen": "No info available.",
        "The Rogue Prince": "No info available.",
    };
    return (
        <>
            <ul>
                {books2.map((book) => (
                    <li key={book.url}>
                        <div className="image-container">
                            <img
                                src={bookImages[book.name]}
                                alt={`${book.name} Cover`}
                                className="book-image"
                            />
                            <h4 style={{padding: "5px", color: "#70300E"}}>{book.name}</h4>
                            <h4 style={{color: "#70300E"}}>George R.R. Martin</h4>
                            <h4 style={{padding: "5px" , color: "#70300E"}}>$9,24</h4> 
                            <Button
                            buttonText={showInfo ? "Close Info" : "Book Info"}
                            className="backBTN"
                            onClick={() => setShowInfo(prev => !prev)}
                            ></Button>
                            <Button
                            buttonText="Add to cart"
                            className="backBTN"
                            onClick={() => addItemToCart(book.name)}
                            ></Button>
                            {showInfo && <p className="bookInfo">{bookInfo[book.name]}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
