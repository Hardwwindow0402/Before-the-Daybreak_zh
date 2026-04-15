const scenes = {
    ch_1: {
        type: "chapter",
        label: "第一章",
        title: "第一章：克林顿之夜",
        subtitle: "",
        caption: "",
        hint: "",
        image: "images/chapters/clinton.png",
        text: [
            "那是旧金山诺布山区克林顿高中的普通一晚。",
            "晚上7点20分。一切看似正常。"
        ],
        choices: [
            { text: "继续", next: "ch1_c1" }
        ]
    },

    ch1_c1: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: ["你站在体育馆里。大约有二十个学生在里面，进行着各种运动。",
            "几个人在打羽毛球，另一群女生站在附近聊天。",
            "\"等一下，我去趟洗手间，\"一个叫理查德的高个子男生对你说。",
            "然后他走出了体育馆，门在他身后关上了。",
            "一分钟后，你听到了一声枪响……",
            "奇怪的是，似乎只有你听到了这个声音。",
            "其他人都像往常一样继续活动，好像什么都没发生。",
            "只有一个叫威尔的男生看了你一眼。",
            "你决定……"
        ],
        choices: [
            { text: "告诉大家", next: "ch1_c3_1" },
            { text: "只告诉威尔", next: "ch1_c2_1" },
            { text: "继续运动", next: "ch1_c2_2" }
        ]
    },
    ch1_c2_1: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`
                "威尔，你听到了吗？"

                "听到什么？" 威尔看了你一眼。"我没听到什么奇怪的声音。"

                难道是我听错了？你心想。

                "不，我是认真的。那是枪声。"

                威尔没有回答。他脸上的表情清楚地表明他不相信你。

                有那么一瞬间，连你自己都开始怀疑了。

                然后声音再次响起。

                砰。砰。砰。`

        ],
        choices: [
            { text: "继续", next: "ch1_c3_1" },

        ]
    },


    ch1_c2_2: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`声音再次响起。这次，其他学生也听到了。
                他们愣住了，面面相觑，恐慌在脸上蔓延。
                他们立刻明白了。
                校园里有一个枪手。`
        ],
        choices: [
            {
                text: "告诉大家",
                next: "ch1_c3_1"

            },
            { text: "继续玩", next: "ch1_c3_2" }
        ]
    },

    ch1_c3_1: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`所有人都惊慌失措，没有人知道该怎么办。
                他们在城市最安全的地方长大。
                从来没有人经历过这种事情。
                有些人想跑出体育馆。另一些人建议躲在角落里。
                大多数人只是呆站在原地，动弹不得。
                你决定：`

        ],
        choices: [
            { text: "躲起来", next: "ch1_c4_1" },
            {
                text: "跑",
                outcomes: [
                    { chance: 0.2, next: "ch1_c4_2" },
                    { chance: 0.8, next: "ch_2" }
                ]
            }
        ]
    },

    ch1_c3_2: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [`你告诉自己可能是想多了，很可能听错了。

                毕竟，没有其他人注意到那个声音。

                于是你抛开这个念头，继续和同学们一起玩。

                然而，就在你投出球的那一刻，体育馆的门突然被撞开了。

                七个持枪男子冲了进来。`
        ],
        choices: [
            { text: "躲到看台后面", next: "ch1_c5_1" },
            { text: "趴在地上", next: "e_1" },
            { text: "站起来反抗", next: "e_1" }
        ]
    },
    ch1_c4_1: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你跟随直觉：躲起来。

                你环顾四周，但体育馆里几乎无处可藏。

                在压力下，你做出了一个瞬间的决定，并希望一切顺利……
                        `
        ],
        choices: [
            {
                text: "躲到看台后面", next: "ch1_c5_1"
            },
            {
                text: "溜进角落", next: "ch1_c5_2"
            },
            {
                text: "爬到通风室", next: "ch1_c5_3"
            }
        ]
    },
    ch1_c4_2: {
        type: "content",
        label: "第一章",
        text: [
            `你推开体育馆的门，走了出去。

            门打开的一瞬间，你发现自己与一个持枪男子面对面。

            他举起了枪……`
        ],
        choices: [
            { text: "继续", next: "e_1" }
        ]
    },
    ch1_c5_1: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `
            你躲在了看台后面。整个体育馆陷入了死寂。

            哐当。门被猛地推开。

            有人走进了体育馆。

            昏暗的光线下，你看到七个持枪男子站在篮球场上。他们都穿着厚重的黑色防弹衣，手持步枪。

            "出来！别躲了！" 中间的那个男人喊道。

            没有人回答。

            "搜！" 他命令道。

            其他人分散开来，检查每一个可能的藏身之处。躲在角落里的学生被发现并被杀害。

            然后他们开始朝看台走来……
            `
        ],
        choices: [
            {
                text: "继续",
                outcomes: [
                    { chance: 0.4, next: "e_1" },
                    { chance: 0.6, next: "ch1_c6" }
                ]
            }
        ]
    },
    ch1_c5_2: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你躲在了角落里。整个体育馆陷入了死寂。
            哐当。门被猛地推开。

            有人走进了体育馆。

            昏暗的光线下，你看到七个持枪男子站在篮球场上。他们都穿着厚重的黑色防弹衣，手持步枪。

            "出来！别躲了！" 中间的那个男人喊道。

            没有人回答。

            "搜！" 他命令道。

            其他人分散开来，检查每一个可能的藏身之处。
            
            你看到有人朝你走来……`
        ],
        choices: [
            { text: "继续", next: "e_1" }
        ]
    },
    ch1_c5_3: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你躲在了通风室里。整个体育馆陷入了死寂。

            哐当。门被猛地推开。

            有人走进了体育馆。

            昏暗的光线下，你看到七个持枪男子站在篮球场上。他们都穿着厚重的黑色防弹衣，手持步枪。

            "出来！别躲了！" 中间的那个男人喊道。

            没有人回答。

            "搜！" 他命令道。

            其他人分散开来，检查每一个可能的藏身之处。躲在角落里的学生被发现并被杀害。

            然后他们走向看台，躲在后面的学生也被发现并杀害了…… `
        ],
        choices: [
            { text: "继续", next: "ch1_c6" }
        ]
    },
    ch1_c6: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `
            体育馆再次安静下来，仿佛什么都没有发生过。

            你待在原地，浑身发抖，不知道该不该出来。

            你又等了一两分钟。

            没有任何动静。

            好像整个世界都停止了。

            现在，你必须决定：`
        ],
        choices: [
            { text: "出去", next: "ch_2" },
            { text: "继续躲着", next: "ch1_c6_c" }
        ]
    },
    ch1_c6_c: {
        type: "content",
        label: "第一章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你继续躲着。

            体育馆再次安静下来，仿佛什么都没有发生过。

            你待在原地，浑身发抖，不知道该不该出来。

            你又等了一两分钟。

            没有任何动静。

            好像整个世界都停止了。

            现在，你必须决定：`
        ],
        choices: [
            { text: "出去", next: "ch_2" },

        ]
    },

    ch_2: {
        type: "chapter",
        label: "第二章",
        title: "第二章：跑，跑，快跑！",
        subtitle: "",
        caption: "",
        hint: "",
        image: "images/chapters/corridor.png",
        text: [
            `你成功活着走出了体育馆。
            但危险远未结束……`
        ],
        choices: [
            { text: "继续", next: "ch2_c1" }
        ]
    },
    ch2_c1: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你死里逃生，走出了体育馆。

            你发现自己身处一条走廊。
            左边，地板上满是血迹和脚印。
            那条路通往后院和图书馆。

            右边，地板更干净。
            那条路通往教学楼和前门——那是离开学校最近的路。

            "走左边！" 一个叫科西的女孩说着，已经朝那边走了。

            "等等，" 威尔说。"我们必须尽快离开这里。"

            在一片混乱中，你决定：`
        ],
        choices: [
            { text: "向右走", next: "ch2_c2_1" },
            { text: "向左走", next: "ch2_c2_2" }

        ]
    },

    ch2_c2_1: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你选择了右边的走廊。

        你拼命奔跑，沿着它一直跑到教学楼。

        继续前进时，你注意到右侧有一段楼梯通往楼上。

        你会：`
        ],
        choices: [
            { text: "转弯上楼", next: "ch2_c3_2" },
            { text: "继续前进", next: "ch2_c3_1" }
        ]
    },

    ch2_c2_2: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `不知怎的，你选择了左边的走廊，无视了那些血迹。

        沿着走廊快速移动，你离开了体育馆，来到了克林顿高中的后院。

        院子位于图书馆和体育馆之间，在教学楼后面。

        再往前是一座荒废的花园……

        你决定：`
        ],
        choices: [
            { text: "去花园", next: "ch_4" },
            { text: "待在院子里", next: "e_1" },
            { text: "去图书馆", next: "ch_3" }
        ]

    },
    ch2_c3_1: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你继续沿着一楼前进。毕竟，这是去前门最快的路线——逃离这个地狱的最快捷径。

            当你走到走廊尽头时，你悄悄探出头去。

            三个彪形大汉站在走廊更远处，正在谈论着什么。

            只有一个人面朝你的方向。其他人都背对着你。

            那一刻，你决定：`
        ],
        choices: [
            { text: "转身逃跑", next: "ch2_c4_1" },
            {
                text: "悄悄前进",
                outcomes: [
                    { chance: 0.1, next: "ch2_c4_2" },
                    { chance: 0.9, next: "ch2_c4_3" }
                ]
            }

        ]
    },
    ch2_c3_2: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你爬上楼梯到了二楼。

            你发现自己又回到了走廊，但这次走廊被黑暗吞没了。

            刺鼻的火药味和铁锈味弥漫在空气中，让呼吸变得更加困难。

            你几乎看不清墙壁、窗户和教室的门。

            走廊里空无一人。

            当你回头看时，你发现只有科西跟了上来。

            现在你们两个被困在黑暗的二楼，不知道该往哪里去。

            跟着科兹，你们开始悄悄地移动……`
        ],
        choices: [
            { text: "逆时针走", next: "ch2_c4_4" },
            { text: "顺时针走", next: "ch2_c4_5" }
        ]

    },
    ch2_c4_1: {
        type: "content",
        label: "第二章",
        text: [
            `从危险的前门跑回来，你再次经过了楼梯。

            你犹豫了。

            持枪男子可能已经注意到你，大概正在追过来。但二楼完全是个未知数。

            你决定：`
        ],
        choices: [
            { text: "留在一楼", next: "ch2_c3_3" },
            { text: "上二楼", next: "ch2_c3_2" }
        ]
    },


    ch2_c4_2: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你悄悄地向前移动，尽量不发出一点声音。

            你甚至屏住呼吸，生怕他们听见。

            不知怎的，你成功了。

            你穿过了最危险的地方，没有人注意到。

            然后你跑向前门，看到警车包围了整个学校。

            终于，你……`
        ],
        choices: [
            { text: "继续", next: "e_2" }
        ]
    },
    ch2_c4_3: {
        type: "content",
        label: "第二章",
        title: "",
        subtitle: "",
        caption: "",
        hint: "",
        image: "",
        text: [
            `你悄悄地向前移动，尽量不发出一点声音。

            你甚至屏住呼吸，生怕他们听见。

            但要从他们身边溜过去几乎是不可能的。

            他们注意到了你。

            然后他们转过身，开始朝你走来……`
        ],
        choices: [
            { text: "继续", next: "e_1" }
        ]
    },
    ch2_c4_4: {
        type: "content",
        label: "第二章",
        text: [
            `你们继续走着。

            突然，你看到走廊尽头有一束手电筒光。

            沉重的脚步声、破门声、家具撞在地上的声音打破了寂静。

            你看着那个人逐一经过每间教室。他踢开门，用手电筒扫视里面，然后朝房间里扫射。

            几间教室里传来微弱的尖叫声。

            他越来越近了，而你和科兹被困在走廊中间。

            你决定`
        ],
        choices: [
            { text: "躲进附近的教室", next: "ch2_c5_1" },
            {
                text: "转身逃跑",
                outcomes: [
                    { chance: 0.5, next: "ch2_c4_5" },
                    { chance: 0.5, next: "ch2_c5_2" }
                ]
            }
        ]
    },
    ch2_c5_2: {
        type: "content",
        label: "第二章",
        text: [
            `你转身逃跑。

            但已经太晚了。

            他已经看见了你们俩。`

        ],
        choices: [
            {
                text: "继续",
                outcomes: [
                    { chance: 0.9, next: "e_1" },
                    { chance: 0.1, next: "ch2_c6_2" }

                ]
            }
        ]


    },
    ch2_c6_2: {
        type: "content",
        label: "第二章",
        text: [
            `你以为你死定了。

            说实话，我也是这么想的。

            但不知怎的，你活了下来。

            科兹的手臂中枪了，你的右脚伤得很重。
            幸运的是，两个伤口都不是致命的。`
        ],
        choices: [
            { text: "继续", next: "ch2_c4_5" }
        ]
    },




    e_1: {
        type: "ending",
        label: "结局一",
        title: "黎明从未到来",
        subtitle: "",
        caption: "",
        hint: "黎明之前：逃离克林顿",
        image: "images/endings/e_1.png",
        text: [
            `一股温热的感觉蔓延全身。之后，你什么都不记得了。

            很可能——十有八九——你已经死了。

            —— 终 ——
            `
        ],
        choices: [
            { text: "重新开始", next: "ch_1" }
        ]
    },
    e_2: {
        type: "ending",
        label: "结局二",
        title: "暂时安全",
        subtitle: "",
        caption: "",
        hint: "黎明之前：逃离克林顿",
        image: "images/endings/e_2.png",
        text: [
            `终于，你看到了学校外面的路灯。

            有人抓住你的手臂，帮你翻过了高墙。

            你抬头望向天空。黑暗开始消散。

            你第一次意识到这个世界有多么美丽。

            而现在，正是黎明前的时刻。

            —— 终 ——
            `
        ],
        choices: [
            { text: "重新开始", next: "ch_1" }
        ]
    }
};

function showScene(sceneId) {
    const scene = scenes[sceneId];

    document.getElementById("scene-label").innerText = scene.label || "";
    document.getElementById("scene-title").innerText = scene.title || "";
    document.getElementById("scene-subtitle").innerText = scene.subtitle || "";
    document.getElementById("scene-caption").innerText = scene.caption || "";
    document.getElementById("continue-hint").innerText = scene.hint || "";

    const imageElement = document.getElementById("scene-image");
    const imageFrame = document.getElementById("image-frame");

    if (scene.image) {
        imageElement.src = scene.image;
        imageElement.style.display = "block";
        imageFrame.style.display = "block";
    } else {
        imageElement.style.display = "none";
        imageFrame.style.display = "none";
    }

    const textElement = document.getElementById("scene-text");
    textElement.innerHTML = "";
    for (const para of scene.text) {
        const p = document.createElement("p");
        p.innerText = para;
        textElement.appendChild(p);
    }

    const choicesElement = document.getElementById("choices");
    choicesElement.innerHTML = "";
    for (const choice of scene.choices) {
        const button = document.createElement("button");
        button.innerText = choice.text;

        button.onclick = function () {
            if (choice.outcomes) {
                const roll = Math.random();
                let total = 0;

                for (const outcome of choice.outcomes) {
                    total += outcome.chance;
                    if (roll < total) {
                        showScene(outcome.next);
                        return;
                    }
                }
            } else {
                showScene(choice.next);
            }
        };

        choicesElement.appendChild(button);
    }
}


showScene("ch_1");