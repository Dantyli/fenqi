<template>
    <div class="popup">
       <div class="mask"></div>
       <div class="text">
           <img @click="close" src="../../assets/close.png" alt="">
           <p class="title">{{title}}</p>
           <div class="scroll" v-if="type==0">
               <p>
        尊敬的用户(以下简称“您”),欢迎您使用嗨借风险评级报告。
        嗨借平台(以下简称“平台”或“本平台”),致力于根据您的个人需求,为您提供风险评级报告。 您欲使用本平台提供的风险评级报告,您应当阅读并遵守 《风险评级报告协议》 (以下简称“本协议”)。请您务必审慎阅读、充分理解各条款内容,特别是免除或限制责任以及其他重要条款,以及开通或使用某项服务的单独协议,并选择接受或不接受。 免除或限制责任条款以及其他重要条款可能以加粗形式提示您注意。 在签署本协议时,本平台已经采取所有合理的方式提请您注意,并就该等条款做出了充分合理的解释和说明,您完全知晓和理解该等条款的规定并同意接受。
        除非您已阅读并接受本协议所有条款,否则您无权使用本平台提供的服务。 您对本平台提供的服务的任何购买或接受赠与等获取行为及登录、查看等任何使用行为即视为您已阅读并同意本协议的约束。
        <h4>如果您未满18周岁,请您在法定监护人的陪同下阅读本协议,并特别注意未成年人使用条款.</h4>
        
        
        <h3>
                一、关于本服务
        
        </h3>
        <p>
                1.1本服务即风险评级报告,是指您按照本平台的指定方式支付风险评级报告费之后,本平台将根据您主动提交的信息以及您授权本平台采集的信息, 对您的资信状况进行风险评级,并向您提供一份《风险评级报告》 (以您获得的报告实际名称为准),用于您自查个人相关资信状况,以及本平台将对《风险评级报告》进行审核, 并决定您是否在平台上继续进行其他评估服务。
                本平台可能会根据您的需求、服务类型的变化等,对现有风险评级报告内容进行调整以及不断推出新的服务种类。本平台也可能会在不同时间推出具体不同的服务内容,以不断完善、优化本服务。具体服务种类及服务内容以相关服务页面公布、实际提供的内容为准。您可以自行根据需要选择相应服务。
                此外,您所享有的本服务的具体内容可能会因为级别、开通期限、您选择的具体服务类别等因素而有不同,通常高级别、开通期限较长等情况下,您将会享有更多的服务,具体以平台相关服务页面公布、实际提供的内容为准。
                <h4>1.2为更好地向您提供本服务,您同意并授权本平台为提供本服务需要使用、并与合作第三方分享您向本平台提供的个人信息(包括但不限于身份信息、银行卡号、联系方式、住址、联系人信息、职业、资产情况、多头借贷情况及逾期信息等),也可以为您提供服务的需要,本平台向其他必要第三方提供上述信息,您保证您提交的信息真实准确完整有效,且您知悉并同意本平台进行上述操作。
                1.3您同意并授权本平台及其合作方,在您向本平台申请风险评级报告时以及您获得后续金融机构或其他方的贷款服务期间内,多次向合法设立的机构或大数据服务机构查询您的个人信息,包括可能对您造成负面影响的不良信息,用于了解您的及资信情况之用途。</h4>
                1.4您在平台上进行充值、支付风险评级报告费用后,本平台将对根据您的授权,对您提交的个人信息进行信息真实度和资信方面的评估,向您提供一份 《风险评级报告》(以您获得的报告实际名称为准),用于您自查个人相关资信状况并决定您是否在平台上继续申请其他评估服务。 但请您格外注意,本平台向您提供该报告,并不能视为向您提供任何服务进行保证。该报告有别于央行提供的正规报告,且报告所载内容仅供参考,本平台并不能完全保证该报告所载信息的真实性、准确性及完整性。
                1.5您明确并知悉,您应当自行妥善保管并使用您获得的《风险评级报告》及其所载信息。 因保管或使用不当导致您个人信息发生泄露而给您带来任何损害的,您应当自行承担相应法律责任,本平台概不负责。
            
        
        <h3>
            二、关于收费
        </h3>
        <p>
            <h4> 2.1本服务为收费服务,本平台有权向您收费,您应当按照本平台公布的收费标准支付相应风险评级报告费后,方可使用本服务。此外,您也可以通过接受好友赠送等本平台认可的其他方式进行付费并使用本服务。本服务的收费标准具体而言详见平台服务页面。 您可以根据自身需求确定服务期限并支付相应费用。</h4>
                2.2本平台可能会根据本服务的整体规划,对本服务的收费标准、方式等进行修改和变更,前述修改、变更,本平台将在相应服务页面进行展示。 您若需要获取、使用本服务,请先提前了解清楚当时关于本服务的收费标准、方式等信息。
            <h4> 2.3本平台根据本协议向您收取的费用,在因您未能通过本平台推荐的渠道成功借款或因本平台的原因导致您无法向我们推荐的融资渠道申请借款的情况下,本平台可将根据本协议收取的费用退还至您的账户,以下情况除外:
                (1) 因您个人原因,未向本合同合作的任意一家机构申请借款;
                (2)您已通过本平台的推荐,成功获得借款。</h4>
                2.4具体退款流程以本平台的公告或规则为准。
                
        <h3>
            三、服务开通

        </h3>
        <p>
                3.1您应该通过本平台指定的包括但不限于快钱支付等现有方式、以及今后本平台指定的方式在依约充值或支付一定费用后开通本服务。本服务开通之后,不可进行转让。
                3.2您不得以以下方式开通本服务,否则,本平台有权拒绝向您提供本服务,并有权注销该等账号:
                3.2.1以营利、经营等非个人使用的目的为自己或他人开通本服务;
                3.2.2通过任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件等任何程序、软件方式为自己或他人开通本服务;
                3.2.3通过任何不正当手段或以违反诚实信用原则的方式为自己或他人开通本服务;
                3.2.4通过非本平台指定的方式为自己或他人开通本服务;
                3.2.5通过侵犯本平台或他人合法权益的方式为自己或他人开通本服务;
                3.2.6通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通本服务。
                3.3为了让您更便捷地享受本服务,您开通的同时将默认关注本平台官方公众号,如您不需要使用官方公众号的各项服务,可随时取消关注。
                3.4本服务的服务期限以您自行选择并支付相应服务费用的期限为准,您也可以登陆本平台充值中心或者本服务的相应页面查询。
                3.5您在使用本服务时不得利用本服务从事以下行为,包括但不限于:
                3.5.1发布、传送、传播、储存违反国家法律、危害国家安全统一、社会稳定、公序良俗、社会公德以及侮辱、诽谤、淫秽、暴力的内容;
                3.5.2发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容;
                3.5.3虚构事实、隐瞒真相以误导、欺骗他人;
                3.5.4发表、传送、传播广告信息及垃圾信息;
                3.5.5从事其他违反法律法规、政策及公序良俗、社会公德等的行为。
                3.6本服务仅供您个人使用,除非经本平台书面许可,您不得进行以下行为:
                3.6.1通过任何方式搜集本服务中其他用户的用户名、电子邮件等相关信息,并以发送垃圾邮件、连锁邮件、垃圾短信、即时消息等方式干扰、骚扰其他用户;
                3.6.2通过本服务发布包含广告、宣传、促销等内容的信息;
                3.6.3将本服务再次许可他人使用;
                3.6.4其他未经本平台书面许可的行为。
                3.7您充分了解并同意,您必须为自己注册账号下的一切行为负责,包括但不限于您所发表的任何内容以及由此产生的任何后果。您应对本服务中的内容自行加以判断,并承担因使用内容而引起的所有风险,包括因对内容的正确性、完整性或实用性的依赖而产生的风险。
                3.8您充分了解并同意,由于互联网服务的特殊性,本平台可能会按照相关法规、双方约定或在其他必要时,中止或终止向您提供本服务,届时,本平台会依法保护您的合法权益。
                
        </p>
        <h3>
            四、违约责任

        </h3>
        <p>
        4.1如果本平台发现或收到他人举报您有违反本协议任何行为的,本平台有权依法进行独立判断并采取技术手段予以删除、屏蔽或断开相关的信息。 同时,本平台有权视您的行为性质,对您采取包括但不限于暂停或终止部分或全部本服务、中止或终止您使用账户、追究您法律责任等措施,本平台也无需向您退还任何费用,而由此给您带来的损失(包括但不限于中断通信、清空相关数据、未使用的服务费用作为违约金而归本平台所有等),由您自行承担,造成本平台损失的,您也应予以赔偿。
        4.2您有违反本协议任何行为,导致任何第三方损害的,您应当独立承担责任两本平台因此遭受损失和的,您也应当一并赔偿。
        
        </p>
        <h3>
            五、法律适用及争议解决
        
        </h3>
        <p>
                5.1本协议的成立、生效、履行、解释及纠纷解决,适用中华人民共和国大陆地区法律(不包括香港特别行政区、澳门特别行政区以及台湾地区)。
                5.2若您和本平台之间发生任何纠纷或争议,首先应友好协商解决; 协商不成的,任何一方均有权将相关争议提交至北京市昌平区人民法院管辖。 败诉方将承担并支付诉讼费用以及所有费用.
                
        </p>
        <h3>
            六、其他
        </h3>
        <p>
                6.1本协议是您与本平台之间关于您使用本服务所订立的协议,您使用本服务即视为您已阅读并同意受本协议的约束。
                6.2本协议内容同时包括本平台可能不断发布的关于本服务的相关协议、业务规则等内容。 上述内容一经正式发布,即为本协议不可分割的组成部分,您同样应当遵守。
                6.3本协议条款因违反法律法规、监管机构 (包括但不限于国务院、银行保险监管机构、地方金融办)要求被认定不合规、无效或不能履行等情况的,本平台有权据此解除本协议,且不承担任何违约责任,由此造成的损失由您自行承担。
                6.4本协议条款无论因何种原因部分无效或不可执行,其余条款仍有效,对双方具有约束力。
                6.5本协议由您以及本平台以电子合同的形式进行签署,并由本平台委托第三方电子存证机构保存本协议及其他电子信息,具有法律效力。
                
        </p>
        <p>平台方：【嗨借平台】
        </p>
        <p>
            您：<span class="name">{{userInfo.name}}</span>
        </p>
        <p>
            签署时间：<span class="time">{{userInfo.time|format}}</span>
        </p>
        <p>
            个人信息查询及使用授权书

        </p>
        <p>
            致：嗨借平台

        </p>
        <p>
             兹有本人<span class="name">{{userInfo.name}}</span>，身份证号码<span class="cardid">{{userInfo.cardNo}}</span>，在此不可撤销地授权贵平台以及贵平台之关联公司，根据本授权书合法查询、整理、保存、加工、使用和提供本人的信用信息。
        
        </p>
        <p>
            1、授权事项及用途

        </p>
        <p>
            （1）本人风险评级报告及信用信息的查询和使用
        <h4>因本人拟向贵平台提出借款申请并由贵平台提供借款相关服务（包括但不限于推介适格资金方、信审、风控等服务），贵平台需要了解本人的信用记录，用于审核贷款申请条件、贷后管理及风险控制，因此本人同意并授权贵平台在业务关系建立和存续期间有权多次自行或者通过查询服务提供机构向包括但不限于中国人民银行征信中心金融信用信息基础数据库、中国互联网金融协会、中诚信征信有限公司等依法成立的征信机构（以上统称“征信机构”）以及其他信息服务机构（第三方大数据服务公司）查询并获取本人的征信信息以及个人信息。贵平台有权基于提供借款相关服务、借款主体资格审查以及其他确保实现贵平台在《用户注册服务协议》、《隐私政策》或《评估推荐服务协议》等协议下利益的目的查询、使用和保存本人风险评级报告及信用信息。
        （2）本人信息的对外提供
               本人同意并授权：贵平台有权将在业务关系建立和存续期间获得的与本人有关的资信信息，包括信贷信息、信用信息、个人基本信息、不良信息和其他信息资料，自行或者通过查询服务提供机构提供给包括但不限于中国人民银行征信中心金融信用信息基础数据库、中国互联网金融协会、中诚信征信有限公司等依法成立的征信机构以及其他信息服务机构,并用于相关法律、法规、规章和规范性文件规定的用途，且不再通知本人。同时，本人同意并授权包括但不限于中国人民银行征信中心金融信用信息基础数据库、中国互联网金融协会、中诚信征信有限公司等依法成立的征信机构以及其他信息服务机构（第三方大数据服务公司）接收贵平台通过查询服务提供机构上传的本人在本次借款过程生成的资信信息。
        （3）本人同意并授权依法成立的征信机构及信息服务机构可以进行以下事项：
               本人同意并授权依法成立的征信机构向有关机构采集本人的个人信息,可依法整理、保存、加工、使用、提供,并出具个人风险评级报告。
        本人同意并授权拥有本人不良信息的信息提供者可以向依法成立的征信机构提供本人的不良信息，且不再另行告知本人。
        本人同意并授权依法成立的征信机构向信息提供者采集本人收入、存款、有价证券、商业保险、不动产的信息和纳税数额信息。
        本人已被明确告知提供上述信息可能会给本人带来财产或信用损失，以及其他可能的不利后果,包括但不限于:采集这些信息对本人的风险评级(评分)、风险评级报告等结果可能产生的不利影响以及该等信息被信息使用者依法提供第三方后被他人不当利用的凤险，但本人仍然同意授权依法成立的征信机构采集这些信息。</h4>
        （4）本人同意并授权查询服务提供机构及其关联公司及其指定的第三方可以进行以下事项：
              <h4> 为更好、更完整地展现本人的资信情况，本人同意并授权查询服务提供机构及其关联公司及其指定的第三方可留存、整理及加工本次获取的本人信息用于查询服务提供机构及其关联公司及其指定的第三方为本人提供的其他服务中。
        本人同意并授权，查询服务提供机构可将其合法获取的本人信息经过整合、加工并转化为信息评分或信息报告回传给贵平台，用于本人申请借款、审批及贷后管理等事项。
        为更好地为本人提供服务，本人同意并授权查询服务机构可与其合作的第三方进行联合研究，并可将通过本授权书获得的本人信息投入到该等联合研究中。但查询服务机构与其合作的第三方在开展上述联合研究前，应要求其合作的第三方对在联合研究中所获取的本人信息予以保密。</h4>

        <p>
            2、授权期限及效力 
        </p>
        <p>
            <h4>（1）本授权书可在本人接受贵平台（或其委托或合作的第三方）提供服务（包括贷前审核和贷后管理）的过程中多次使用，贵平台（或其委托或合作的第三方）及查询服务提供机构自本人签署本授权之日起可多次依据本授权书而操作执行本授权书项下的活动无需本人另行授权。
        （2）本人知悉和完全理解本授权书的内容及因此产生的法律效果。本授权书经本人接受后即时生效，且效力具有独立性，不因相关业务合同或条款无效或被撤销而无效或失效。
        （3）本授权书的形式为电子版，但与纸质版具有同等法律效力。本授权书下的授权是本人自愿作出的真实意思表示，本人愿意承担由此带来的一切法律后果。
        </h4>
      
        <p>
            3、特别提示 
        </p>
        <h4>
                为了保证您的合法权益,您应当阅读并遵守本授权书。 请您务必审慎阅读,并充分理解本授权书的全部内容,特别是以加粗形式提示您注意的。 若您不接受本授权书的任何条款,请您立即停止授权.
                为了保证您的合法权益,您应当阅读并遵守本授权书。 请您务必审慎阅读,并充分理解本授权书的全部内容,特别是以加粗形式提示您注意的。 若您不接受本授权书的任何条款,请您立即停止授权。
                
        </h4>
        <h3>
                代扣服务协议

        </h3>
        <p>
                本代扣服务协议(以下简称"本协议")是用户(以下简称"您")、嗨借(以下简称"本平台"或"平台")以及第三方支付机构就代扣服务(以下简称"本服务")的相关事项所订立的有效合约。
                <h4>本平台及第三方支付机构提醒您在接受本协议之前认真阅读本协议项下全部条款及条件,包括但不限于对您的权利或义务有重大限制的条款。您在此不可撤销地同意并确认,您通过本平台指定的合作方平台使用网络页面或手机APP点击确认、进行勾选或以其他方式选择接受本协议,,即视为您已经认真阅读、充分理解本协议的各项内容,并完全接受本协议项下的全部条款及条件。</h4>
       
        <h3>
                一、代扣服务内容

        </h3>
        <p>
            <h4> 本协议项下代扣服务是指本平台根据您的委托为您撮合第三方支付机构根据您发出的扣款指令向您提供的扣款服务。</h4>

        
        <h3>
                ニ、代扣服务内容
        </h3>
        <p>
            <h4> 2.1 您一旦开通本服务,即表示您委托本平台为您寻找具有合法资质且能够为您提供本协议项下代扣服务的第三方支付机构;并根据您的授权,代为授权第三方支付机构执行扣款指令,从您指定的本人银行账户中扣取您指定的款项并将该等款项划入您指定的本平台账户。
                2.2 您应妥善保管好用于资金划付的资金账户密码、手机号码、网上银行、手机银行密码等,若由于您个人原因造成的损失和责任,均由您自行承担。
                2.3 您对使用代扣服务过程中发出的授权及扣款指令的真实性及有效性承担全部责任,该等授权及扣款指令视为您的真实意思表示且不可变更或撤销。 您承诺,本平台及第三方支付机构依照您的授权及扣款指令进行操作的一切风险均由您自行承担。
                2.4 您保证使用代扣服务过程中提供的所有证件、个人信息、资料等均合法真实、准确、完整、有效。您理解并同意,您通过委托本平台代为授权第三方支付机构向您提供扣款服务的,即表示您已确认并同意遵守第三方支付机构关于代扣服务的相关协议及服务规则。
                2.5 您理解并同意,本平台仅系接受您的委托为您寻找并撮合第三方支付机构向您提供扣款服务,代扣服务系由第三方支付机构为您提供,本平台仅根据本协议的约定为您与第三方支付机构提供撮合服务。本平台对您发出的扣款指令的真实性和准确性均不负有审查义务。本平台不对任何因您个人或第三方支付机构造成的损失负责; 该等损失与责任应由您或第三方支付机构承担。
                </h4>2.6 您理解并同意,第三方支付机构仅系您发出的扣款指令的被授权执行方,第三方支付机构对您发出的扣款指令的真实性和准确性均不负有审查义务。除非第三方支付机构没有依照您的扣款指令进行操作,否则第三方支付机构不对代扣服务产生的损失和责任负责;该等损失与责任应由您与交易对方协商解决。
                <h4>2.7 您理解并同意,若因您指定的扣款的资金账户余额不足或发生有权部门执行的款项冻结、划扣等影响您的资金划付或结算的,相应的责任应由您自行承担。
                2.8 您承诺不会利用代扣服务从事任何非法的或违反本协议目的或者侵犯其他第三方权益的行为,否则本平台有权立即单方面终止提供代扣服务,并不承担任何责任;如果因您的行为给本平台或第三方支付机构造成损失的,您应承担全部赔偿责任。
                </h4>2.9 除本协议另有规定外,本平台在提前短信通知您或在公告的情况下,可以单方面终止向您提供本协议项下代扣服务,并不承担任何赔偿责任。 本平台在终止提供代扣服务后,若发现您之前存在违法或违反本协议目的的使用行为,给本平台或第三方支付机构造成损失的,则本平台或第三方支付机构仍可据此要求您承担相应赔偿责任并保留通过司法途径予以解决的权利。
        
        <h3>
                三、其他
        </h3>
        <p>
                3.1 本协议生效后,未经本平台事先书面同意,您在任何情况下不得擅自变更本协议任何条款及条件。
                3.2 您在此不可撤销及变更地同意并确认,本平台有权根据需要不时修改、补充或变更本协议项下的条款或条件,而无需另行取得您的同意或另行向您发出通知。 [该等修改、补充或变更自本平台向您发出短信或公告之日起生效。]若您在本协议修改后仍继续使用代扣服务的,则表示您已充分阅读、理解并接受修改后的协议,也将完整地遵循修改后的协议。 若您不同意修改后的协议,请您立即停止使用代扣服务,并书面通知本平台.
                3.3 本协议适用中华人民共和国法律进行解释。因本协议产生的或与本协议有关的任何争议,本平台、第三方支付机构将与您友好协商解决。 协商不成的,任何一方有权将该等争议向[本平台住所地]]法院提起诉讼。
                3.4 本协议各方已就本协议条款进行了充分的沟通,本平台与第三方支付机构已向您就本协议内容进行了全面、准确的解释和说明,用户完全了解本协议内容并自愿遵照执行上述约定。
                
        </p>
        </div>





           <div class="scroll" v-if="type==1">
               <p>
                尊敬的用户(以下简称“您”),欢迎您使用嗨借VIP融资咨询服务。
                嗨借平台(以下简称“平台”或“本平台”),致力于根据您的个人需求,为用户您提供VIP融资咨询服务。您欲使用本平台提供的服务,您应当阅读并遵守 《VIP融资咨询服务协议》 (以下简称“本协议”)。请您务必审慎阅读、充分理解各条款内容,特别是免除或限制责任以及其他重要条款,以及开通或使用某项服务的单独协议,并选择接受或不接受。免除或限制责任条款以及其他重要条款可能以加粗形式提示您注意。 在签署本协议时,本平台已经采取所有合理的方式提请您注意,并就该等条款做出了充分合理的解释和说明,您完全知晓和理解该等条款的规定并同意接受。
                除非您已阅读并接受本协议所有条款,否则您无权使用本平台提供的服务。 您对本平台提供的服务的任何购买行为及登录、查看等任何使用行为即视为您已阅读并同意本协议的约束。                
                    
            </p>
            <h3>
                    一、关于本服务
            </h3>
            <p>
                <h4>1.1本服务即VIP融资咨询服务,根据您的具体融资需求,我们将为您提供融资渠道咨询服务。 您可通过我们向您提供的渠道进行比对、选择,最终您可根据您的自身需求进行融资申请。</h4>
                1.2我们也可根据您的授权, 将您在本平台上填写的信息以及您的《风险评级报告》直接与可能提供融资的第三方机构进行分享,由第三方评估您的信用,根据您的需求为您提供授信额度,具体额度与第三方评估后的结果为准。
                1.3本平台仅按照本协议的约定向您提供VIP融资咨询服务,不对您与本平台所推荐的机构之间的法律关系做出任何承诺和保证,您与本平台所推荐的机构之间产生的法律纠纷与本平台无关。                
                
            </p>
            <h3>
                    ニ、收费条款
            </h3>
            <p>
               <h4> 2.1本服务为收费服务,本平台有权向您收费,您应当按照本平台公布的收费标准支付相应的咨询服务费后,方可使用本服务。本服务的收费标准具体而言详见平台服务页面。 您可以根据自身需求确定是否支付相应费用。</h4>
                2.2本平台可能会根据本服务的整体规划,对本服务的收费标准、方式等进行修改和变更,前述修改、变更,本平台将在相应服务页面进行展示。 您若需要获取、使用本服务,请先提前了解清楚当时关于本服务的收费标准、方式等信息。
               <h4> 2.3本平台根据本协议向您收取的费用,在因您未能通过本平台推荐的渠道成功借款或因本平台的原因导致您无法向本平台推荐的融资渠道申请借款的情况下,本平台可将根据本协议收取的费用退还至您的账户,以下情况除外:
                (1)因您个人原因,未向本合同合作的任意一家机构申请借款;
                (2)您已通过本平台的VIP融资咨询服务,成功获得借款。</h4>
                2.4具体退款流程以本平台的公告或规则为准。
                
                    
            </p>
            <h3>
                    三、服务开通
            </h3>
            <p>
                3.1您应该通过本平台指定的包括但不限于易宝支付等现有方式、以及今后本平台指定的方式在依约充值或支付一定费用后开通本服务。本服务开通之后,不可进行转让。
                3.2您不得以以下方式开通本服务,否则,本平台有权拒绝向您提供本服务,并有权注销该等账号:
                3.2.1以营利、经营等非个人使用的目的为自己或他人开通本服务;
                3.2.2通过任何机器人软件、蜘蛛软件、爬虫软件、刷屏软件等任何程序、软件方式为自己或他人开通本服务;
                3.2.3通过任何不正当手段或以违反诚实信用原则的方式为自己或他人开通本服务;
                3.2.4通过非本平台指定的方式为自己或他人开通本服务;
                3.2.5通过侵犯本平台或他人合法权益的方式为自己或他人开通本服务;
                3.2.6通过其他违反相关法律、行政法规、国家政策等的方式为自己或他人开通本服务。
                3.3本服务的服务期限以您自行选择并支付相应服务费用的期限为准,您也可以登陆本平台充值中心或者本服务的相应页面查询。
                3.4您在使用本服务时不得利用本服务从事以下行为,包括但不限于:
                3.4.1发布、传送、传播、储存违反国家法律、危害国家安全统一社会稳定、公序良俗、社会公德以及侮辱、诽谤、淫秽、暴力的内容;
                3.4.2发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容;
                3.4.3虚构事实、隐瞒真相以误导、欺骗他人;
                3.4.4发表、传送、传播广告信息及垃圾信息;
                3.4.5从事其他违反法律法规、政策及公序良俗、社会公德等的行为。
                3.5本服务仅供您个人使用,除非经本平台书面许可,您不得进行以下行为:
                3.5.1通过任何方式搜集本服务中其他用户的用户名、电子邮件等相关信息,并以发送垃圾邮件、连锁邮件、垃圾短信、即时消息等方式干扰、骚扰其他用户;
                3.5.2通过本服务发布包含广告、宣传、促销等内容的信息;
                3.5.3将本服务再次许可他人使用;
                3.5.4其他未经本平台书面许可的行为。
                3.6您充分了解并同意,您必须为自己注册账号下的一切行为负责,包括但不限于您所发表的任何内容以及由此产生的任何后果。 您应对本服务中的内容自行加以判断,并承担因使用内容而引起的所有风险,包括因对内容的正确性、完整性或实用性的依赖而产生的风险。
                3.7您充分了解并同意,由于互联网服务的特殊性,本平台可能会按照相关法规、双方约定或在其他必要时,中止或终止向您提供本服务,届时,本平台会依法保护您的合法权益。
                
            </p>
            <h3>
                    四、违约责任
            </h3>
            <p>
                4.1如果本平台发现或收到他人举报您有违反本协议任何行为的,本平台有权依法进行独立判断并采取技术手段予以删除、屏蔽或断开相关的信息。同时,本平台有权视您的行为性质,对您采取包括但不限于暂停或终止部分或全部本服务、中止或终止您使用账户、追究您法律责任等措施,本平台也无需向您退还任何费用,而由此给您带来的损失(包括但不限于中断通信、清空相关数据、未使用的服务费用作为违约金而归本平台所有等),由您自行承担,造成本平台损失的,本平台有权向您追偿。
                4.2您有违反本协议任何行为,导致任何第三方损害的,您应当独立承担责任两本平台因此遭受损失和的,您也应当一并赔偿。
                
            </p>
            <h3>
                    五、法律适用及争议解决

            </h3>
            <p>
                5.1本协议的成立、生效、履行、解释及纠纷解决,适用中华人民共和国大陆地区法律(不包括香港特别行政区、澳门特别行政区以及台湾地区).
                5.2若您和本平台之间发生任何纠纷或争议,首先应友好协商解决; 协商不成的,任何一方均有权将相关争议提交至北京市昌平区人民法院管辖。 败诉方将承担并支付诉讼费用以及所有费用.
                
            </p>
            <h3>
                    六、其他
            </h3>
            <p>
                6.1本协议是您与本平台之间关于您使用本服务所订立的协议,您使用本服务即视为您已阅读并同意受本协议的约束。
                6.2本协议内容同时包括本平台可能不断发布的关于本服务的相关协议、业务规则等内容。 上述内容一经正式发布,即为本协议不可分割的组成部分,您同样应当遵守。
                6.3本协议条款因违反法律法规、监管机构 (包括但不限于国务院、银行保险监管机构、地方金融办)要求被认定不合规、无效或不能履行等情况的,本平台有权据此解除本协议,且不承担任何违约责任,由此造成的损失由您自行承担。
                6.4本协议条款无论因何种原因部分无效或不可执行,其余条款仍有效,对双方具有约束力。
                6.5本协议由您以及本平台以电子合同的形式进行签署,并由本平台委托第三方电子存证机构保存本协议及其他电子信息,具有法律效力。
            </p>
           </div>
           <div class="scroll" v-if="type==2">
            <h2>平台用户注册服务协议</h2>
        <p>
            在您注册、登录嗨借（下称“平台”或“本平台”），包括网站及App或使用本平台所提供的相关服务前，请您务必认真阅读、充分理解本《平台用户注册服务协议》（以下称“本协议”）中规定的所有权利义务，尤其是其中涉及的免除及限制双方责任、对双方权利进行限制的条款。除非您接受本协议条款，否则您无权注册、登陆本平台或使用本平台所提供的相关服务。您一旦注册、登陆本平台或以任何方式使用本平台提供的相关服务，将视为您接受本协议，且表示您同意接受本协议各项条款的约束，并成为本平台的用户。届时您不应以未阅读本协议的内容或者未获得本平台对您的问询进行解答或解释等理由主张本协议无效，或要求撤销本协议。如果您不同意本协议中的条款，请不要注册、登陆本平台或使用本平台的任何服务。请您知悉，本协议是您与本平台嗨借（以下称“本平台“）之间的法律协议，并以电子合同方式签署，具有法律效力。

        </p>
        <h3>
            一、平台声明
        </h3>
        <p>
            1．本协议内容包括以下条款及已经发布的或将来可能发布的各类规则、公告或通知。所有规则为本协议不可分割的一部分，与本协议正文具有同等法律效力。本协议是由您与本平台共同签订的，适用于您在平台的全部交易活动。在您注册时，您已经阅读、理解并接受本协议的全部条款及各类规则，并承诺遵守中国现行的法律、法规、规章及其他政府规定，如有违反而导致任何法律后果的发生，您将以自己的名义独立承担所有相应的法律责任。
            2．本平台有权根据需要不时地制定、修改本协议或各类规则，如本协议及规则有任何变更，本平台将在网站（如有）、手机客户端上刊载公告，经修订的本协议、规则一经公布后，立即自动生效。您应不时地注意本协议及规则的变更。您在公告之日后登陆本平台或继续使用本平台提供的任何一项服务的，即表示您已仔细阅读、充分理解并接受修改后的协议内容，也将遵循修改后的协议内容使用本平台提供的有关服务；若您不同意相关变更，您应该立即停止使用本平台提供的有关服务，且本平台有权不经任何告知终止、中止本协议或者限制您进入平台的全部或者部分板块且不承担任何法律责任。
            
        </p>
        <h3>
            二、用户注册

        </h3>
        <p>
            1．您作为自然人，注册成为本平台用户应当满足如下条件：
必须是中华人民共和国（不包括香港特别行政区、澳门特别行政区及台湾地区）公民，年满18周岁，非全日制在校学生，具有完全民事权利和民事行为能力，能够独立承担民事责任；但通过本平台另行设置的规则及流程进行注册的用户除外。在使用本平台服务前，您必须先在本平台进行注册并完成相关认证程序。
2．您作为非自然人，注册成为本平台用户应当满足如下条件：
（1）必须是在中国境内合法设立并有效存续的主体；
（2）在本平台进行交易时应当遵循法律法规对其经营的要求，具有相应的还款能力，用于还款的资金为合法的自有资金；
3．您必须依本平台要求提示提供注册时的真实、最新、有效及完整的资料，并有义务更新注册资料，确保其为真实、最新、有效及完整。若您提供任何错误、虚假、过时或不完整的资料，或者平台依其独立判断有合理理由怀疑您提供的该等信息或资料为错误、虚假、过时或不完整的，平台有权暂停或终止您使用账户，并拒绝您使用本平台服务的部分或全部功能。在此情况下，平台不承担任何责任，您同意自行负担因此所产生的直接或间接的任何支出或损失。如因您未及时更新基本资料，导致本平台服务无法提供或提供时发生任何错误，您不得将此作为取消交易或拒绝付款的理由，平台亦不承担任何责任，所有后果应由您自行承担。如您因相关交易与合作机构产生诉讼的，平台将根据隐私规则使用、披露相关您的信息或资料。
4．您按照本平台规定的注册程序成功注册成为平台用户，既表示您同意并签署了本协议。本协议不涉及您与平台的其他用户之间因网上交易而产生的法律关系及法律纠纷，但您在此同意将全面接受和履行与平台其他用户在平台签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。

        </p>
       
        <h3>三、账户管理
</h3>
<p>
    1．您确认，您在本平台完成注册后将生成您的账户，该账户将记载您在本平台进行的相关交易记录，且是您登陆并使用本平台的唯一账户。您注册成功后，未经本平台书面同意，不得将您的账户名以任何形式出租、出售、赠与、转让、授权给第三方使用。
    2．账户的用户名及登录密码是本平台识别您用户身份的唯一标识。您确认，使用您的账户和密码登录平台后在平台的一切行为、指令均代表您本人并由您本人承担相应的法律后果。您了解并同意，确保账户及密码的安全是您的责任，并同意以下事项：
    （1）不对其他任何人泄露账户或密码，亦不可使用其他任何人的账户或密码。因黑客、病毒或您的保管疏忽等非本平台原因导致您的账户遭他人非法使用的，本平台不承担任何责任。
    （2）本平台通过您的账户及密码来识别您的指令，您不可撤销地确认，使用您的账户和密码登陆后在本平台的一切行为均代表您本人。您的账户操作所产生的电子信息记录均为您行为的有效凭据，并由您本人承担由此产生的全部责任。
    3．如您发现有第三人冒用或盗用您的账户及密码，或其他任何未经合法授权的情形，应立即以有效方式通知本平台暂停相关服务，否则由此产生的一切责任由您自行承担。同时，您理解本平台您的请求采取行动需要合理期限，在此之前，本平台对第三人使用该服务所导致的损失不承担任何责任。
    （3）冒用他人账户及密码的，本平台及其合法授权主体保留追究实际使用人连带责任的权利。
    3．如您发现有第三人冒用或盗用您的账户及密码，或其他任何未经合法授权的情形，应立即以有效方式通知本平台暂停相关服务，否则由此产生的一切责任由您自行承担。同时，您理解本平台您的请求采取行动需要合理期限，在此之前，本平台对第三人使用该服务所导致的损失不承担任何责任。
    4．您承诺合法使用平台提供的服务及网站内容，不在平台从事任何可能违反中国现行的法律、法规、规章和政府规范性文件的行为或者任何未经授权使用平台的行为，如擅自进入平台的未公开系统、不正当地使用密码和网站任何内容等。
    
</p>

<h3>
    四、服务内容

</h3>
<p>
   <h4> 1．本平台通过本平台以及其他渠道和方式向您提供以下服务中的一项或多项：对您进行身份认证、银行卡认证，并对您的资信进行尽职调查以及评估，向您提供一份《风险评级报告报告》（以您获得的报告实际名称为准），用于您自查个人相关资信状况并决定您是否在平台上继续申请贷款；为您提供信息推送服务，向您推送金融机构或类金融机构发布的各类合适的借款产品，或/并引导您向与本平台合作的金融机构或类金融机构的平台申请借款具体详情以本平台当时提供的服务内容为准。您确认，不管本协议是否有相反规定，平台可能根据业务需要或政策要求而不时调整本协议项下的服务内容或服务提供的方式、对象或提供方，具体以本平台不时发布的公告或规则为准。
    2．您确认，您在本平台上按本平台相关服务流程所确认的交易状态，将成为本平台为您进行相关交易或操作（包括但不限于提供个人信息等）的不可撤销的指令，且该等指令为不可逆转的，您不得以任何理由拒绝或延迟履行因该等指令所产生的相关义务。您同意相关指令的执行时间以本平台在系统中进行实际操作的时间为准。您同意本平台有权依据本协议及/或本平台相关纠纷处理规则等约定对相关事项进行处理。
    </h4>3．您通过本平台有关服务与其他用户达成的所有交易项下资金的存放和转移均由本平台的合作机构通过银行或第三方支付机构实现，本平台并不存放有关交易资金。
    4．您完全了解本平台并不是银行或其他金融机构，按照中国法律规定，本平台不提供“即时”金额转账服务，您同意本平台对资金到账延迟不承担任何责任。
    5．您确认，通过本平台进行各项交易或接受交易款项时，若您未遵从本协议条款或本平台公布的交易规则中的操作指示，本平台不承担任何责任。
    6．本平台有权基于交易安全等方面的考虑不时设定涉及交易的相关事项，包括但不限于交易限额、交易次数等，您了解本平台的前述设定可能会对交易造成一定不便，对此没有异议。
    7．如果本平台发现因系统故障或其他任何原因导致的处理错误，无论有利于本平台还是有利于您，本平台都有权纠正该错误。
    8．您同意，本平台有权在提供本平台服务过程中以各种方式投放各种商业性广告或其他任何类型的商业信息（包括但不限于在本平台的任何页面上投放广告），并且，您同意接受本平台通过电子邮件、手机短信或其他您预留的联系方式向您发送产品信息或其他相关商业信息。
    
</p>

<h3>
    五、合同及授权书管理

</h3>
<p>
    1．您在本平台以及在本平台合作机构之间进行交易需要订立的合同或协议或授权书等法律文件将采用电子合同或该等金融机构或类金融机构确定的其他方式。您根据有关协议及本平台的相关规则在本平台及金融机构平台或类金融机构平台确认签署的电子合同/授权书即视为您本人真实意愿并以您本人名义签署的合同/授权书，具有法律效力。您应妥善保管自己的账户密码等账户信息，您通过前述方式订立的电子合同对合同各方具有法律约束力，您不得以账户密码等账户信息被盗用或其他理由否认已订立的合同的效力或不按照该等合同履行相关义务。
    2．您同意并确认本平台或与本平台建立合作关系的第三方有权委托第三方电子存证机构保存上述电子合同/授权书等其他电子信息。您不可撤销地在此授权本平台及与本平台建立合作关系的第三方，如由第三方电子存证机构保存电子协议/授权书的，本平台及与本平台建立合作关系的第三方有权代您申请相关数字证书及电子签章并为签署相关电子合同/授权书的目的使用前述数字证书及电子签章。您同意，本平台及与本平台建立合作关系的第三方按照前述方式使用您的数字证书及电子签章的法律后果由您独立承担。
    3．您根据本协议、本平台的相关规则与本平台或与本平台建立合作关系的第三方签署电子合同/授权书后，不得擅自修改该合同/授权书。本平台或与本平台建立合作关系的第三方向您提供电子合同/授权书的保管查询、核对等服务，如对电子合同/授权书真伪或电子合同/授权书的内容有任何疑问，您可通过发送电子邮件向本平台或与本平台建立合作关系的第三方申请查阅有关合同/协议/授权书并进行核对。如对此有任何争议，应以本平台记录的内容为准。
    
</p>
<h3>
    六、免责声明

</h3>
<p>
    1．平台提供的服务中不带有对平台中的任何您、任何交易的任何保证或条件，无论是明示、默示或法定的，因此平台及其股东、创建人、董事、监事、高级管理人、高级职员、代理人、关联公司、母公司、子公司和雇员等均不能完全保证网站内容的真实性、充分性、及时性、可靠性、完整性和有效性，并且免除任何由此引起的法律责任。
    2．在任何情况下，对于您使用本平台服务过程中涉及由第三方提供相关服务的责任由该第三方承担，本平台不承担该等责任。本平台不承担责任的情形包括但不限于：
    （1）因银行、第三方支付机构等第三方未按照您和/或本平台指令进行操作引起的任何损失或责任；
    （2）因银行、第三方支付机构等第三方原因导致资金未能及时到账或未能到账引起的任何损失或责任；
    （3）因银行、第三方支付机构等第三方对交易限额或次数等方面的限制而引起的任何损失或责任；
    （4）因其他第三方的行为或原因导致的任何损失或责任。
    3．因您自身的原因导致的任何损失或责任，由您自行承担责任，本平台不承担责任，具体情形包括但不限于：
    （1）您未按照本协议或本平台不时公布的任何规则进行操作导致的任何损失或责任；
    （2）因您未妥善保管或泄露您的账号信息、银行卡信息或身份认证等信息导致的您自身、本平台及本平台其他用户或任何第三方的任何损失或责任，均由您承担相应责任；
    （3）您向本平台发送的指令信息不明确、或存在歧义、不完整等导致的任何损失或责任；
    （4）其他因您个人原因导致的任何损失或责任。
    4．基于互联网的特殊性，本平台及其合作平台不保证其提供的服务不会出现中断，也不保证服务的及时性和/或安全性。系统因相关状况无法正常运作，使您无法使用任何本平台服务或使用任何本平台服务时受到任何影响时，本平台对您或第三方不负任何责任，前述状况包括但不限于：
    （1）本平台系统停机维护期间；
    （2）电信设备出现故障不能进行数据传输的；
    （3）由于黑客攻击、网络供应商技术调整或故障、网站升级、银行方面的问题等原因而造成的本平台服务中断或延迟；
    （4）因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成本平台系统障碍不能执行业务的。
    5．本平台的手机客户端、网站内容可能涉及由第三方所有、控制或者运营的其他网站或平台（以下称“第三方网站”或“第三方平台”）。本平台不能保证也没有义务保证第三方网站上的信息的真实性、有效性和安全性。您确认按照第三方网站的服务协议使用第三方网站或第三方平台，并根据该等协议享有权利及承担义务，而不是按照本协议。本平台向您推送的第三方网站或第三方平台的链接，该等链接指向的网站或平台的内容、产品、广告和其他任何信息均由您自行判断并承担风险，而与本平台无关。对于该等链接指向的非由本平台实际控制的任何网页上的内容，本平台不承担任何责任。
    6．在非人为因素或平台无过错的情况下，平台对您使用平台服务而产生的任何形式的直接或间接损失均不承担法律责任，包括但不限于资金损失、利润损失、营业中断损失等。因平台或者涉及的第三方网站或第三方平台的设备、系统存在缺陷或者因为计算机病毒造成的损失，本平台均不负责赔偿，您的补救措施只能是与平台终止本协议并停止使用平台。但是，中国现行法律、法规另有规定的除外。
    7．本平台没有义务监测网站、手机端内容，但是您确认并同意平台有权不时地根据法律、法规、政府要求披露、修改或者删除必要的、合适的信息，以便更好地运营平台并保护自身及平台的其他合法用户。
</p>

<h3>
   七、隐私政策与个人信息授权
 
</h3>
<p>
    1．您同意并不可撤销地授权平台及与业务相关的第三方对本人/本平台的相关交易信息进行收集，并在与业务相关的第三方之间共享；同时同意本平台将查询获取的信息进行保存、整理、加工，但法律、法规、监管政策禁止查询的除外。当您作为借款人借款逾期未还时，平台及作为出借人的合作机构可以使用您的个人信息进行追索债权。
    2．本平台采集的及涉及的您的个人信息主要包括如下方式，请您特别注意：
    （1）您提供给平台的个人信息及您同意平台收集的个人信息的主要目的在于向您提供一个顺利、有效和度身订造的交易体验。
    您授权提供的个人信息包括但不限于：姓名、手机号码、身份证号、归属省份、话费余额、账单信息、套餐信息（部分）、开户日期、地址、联系人、IP地址\互联网协议地址、网络连接状态、通讯录、电子邮件、QQ、微信、短信、通话记录、通讯录及您提供的其他信息，以实现平台更好地为您提供服务。平台可以根据本协议的规定使用或披露前述信息。
    （2）您同意并于此不可撤销地授权本平台可以向国家及地方征信机构、行业协会建立的信用共享平台及其它合法拥有您相关信息的大数据服务机构查询并记录您的相关信息，用于本服务目的。您同意前述机构向本平台提供该等信息无须另行获得您的授权。
    （3）本平台可能自公开来源了解您的情况，并为您度身订造平台服务、解决争议并有助确保在本平台进行安全交易。
    （4）本平台按照您在平台上的行为自动追踪关于您的某些资料，包括但不限于您通过本平台输入的信息、浏览的交易项目及其他广告等。本平台利用这些资料进行的有关对您的人口统计、兴趣及行为的内部研究，以更好地了解您并向您提供更好的服务。
    （5）本平台在平台的某些网页上使用诸如“Cookies”的资料收集装置。如您拒绝本平台使用该等收集装置的，应当在您访问本平台的浏览器或APP客户端中修改相关设置以阻止或删除“Cookies”。
    （6）如您将个人通讯信息（例如：手机短信、邮箱或信件）交付给本平台，或如果其他您或第三方向平台发出关于您在平台上的活动或登录事项的通讯信息，平台可以将这些资料收集在您的专门档案中。
    3．平台对您的资料的使用
    （1）您同意本平台通过信息交互或其他方式将您的个人信息或资料传递至金融机构、类金融机构或本平台合作的其他方。
    （2）您同意平台可使用关于您的个人信息（包括但不限于平台持有的有关您的档案中的资料，及平台从您目前及以前在平台上的活动所获取的其他资料）以解决争议、对纠纷进行调停、有助于确保在平台进行安全交易。
    （3）您同意平台可以使用您的个人信息以改进平台的推广和促销工作、分析网站的使用率、改善平台的内容和产品推广形式，并使平台的内容、设计和服务更能符合您的要求。这些使用能改善平台的网页，以调整平台的网页使其更能符合您的需求，从而使您在使用平台服务时得到更为顺利、有效、安全及度身订造的交易体验。您同意平台利用您的资料与您联络并向您传递（在某些情况下）针对您的兴趣而提供的信息，例如：有针对性的广告条、行政管理方面的通知、产品提供以及有关您使用平台的通讯。
    （4）为禁止您在平台上的欺诈、非法或其他刑事犯罪活动，使平台免受其害，您同意平台可通过人工或自动程序对您的个人信息进行评价。
    4．平台对您信息的披露
    （1）履行本协议提供给本平台的信息，本平台不会恶意出售或免费共享给任何第三方，您同意并于此授权，本平台在以下情况有权将您的资料提供给下述第三方：
    1）为提供平台承诺或提供的相关服务之目的，且平台已就相关服务由第三方提供的事实向您予以披露的；
    2）提供独立服务且仅要求服务相关的必要信息的供应商，如印刷厂、邮递公司等；
    3）具有合法调阅信息权限并从合法渠道调阅信息的政府部门或其他机构，如公安机关、检察院、法院；
    4）为提供平台承诺或提供的相关服务之目的，向本平台的关联实体提供；
    5）向国家及地方征信机构、行业协会建立的信用共享平台及与本平台合作的第三方大数据服务机构提供；
    6）经您或您的授权代表同意的第三方。
    （2）虽然平台采用行业标准惯例以保护您的个人信息，鉴于技术限制，平台不能确保您的全部私人通讯及其他个人信息不会通过本隐私规则中未列明的途径泄露出去。
    （3）本平台有义务根据协议约定、以及有关法律要求向与平台建立合作关系的金融机构、类金融机构、司法机关和政府部门提供您的个人信息。在您未能按照本协议或者与平台或平台合作方签订的其他协议等其他法律文本的约定履行自己应尽的义务时，平台有权根据自己的判断或者与该笔交易有关的其他主体的请求披露您的个人信息，并做出评论。您在与就平台建立合作关系的其他金融机构或类金融机构平台上的借款逾期超过30天的，平台有权对您提供的及平台自行收集的您的个人信息和资料编辑入网站黑名单，用于审核逾期之后您的借款申请。同时，您在此同意并授权平台在网络上公布您的违法、违约行为及您事先提供给平台的信息和资料，并将该等内容记入任何与您相关的信用资料和档案。
    （4）本平台有权根据自己的判断对您提供的及本平台自行收集的您的用户信息和资料在平台上对第三方进行披露，且本平台有权将您提交或本平台自行收集的您的资料和信息与任何第三方进行数据共享，以便本平台和/或第三方催收或追索逾期借款及对您的其他申请进行审核之用，由此可能造成的您的任何损失，本平台不承担法律责任。
    5．您对其他用户的资料的使用
    （1）在平台提供的交易活动中，您无权要求平台提供合作方的相关信息。
    （2）如您通过签署有关协议等方式获得本平台其他合作方的信息，您同意不将该等信息用于该等协议约定事项以外的其他任何用途，除非该等信息根据适用的法律规定、被有管辖权的法院或政府部门要求披露。
    
</p>

<h3>
    八、账户的暂停、注销或终止

</h3>
<p>
    1．在您违反了本协议、相关规则，或在相关法律法规、政府部门的要求下，本平台有权通过站内信、电子邮件通知等方式单方面终止本协议、关闭您的账户或者限制您使用本平台，但不能因此免除您根据本协议或在本平台生成的其他协议项下的尚未履行完毕的义务。
2．您同意，您的账户的暂停、中断或终止不代表您责任的终止，您仍应对其使用本平台服务期间的行为承担可能的违约或损害赔偿责任，同时本平台仍可保有您的相关信息。
3．您决定不再使用账户时，应首先向平台合作机构清偿完毕所有应付款项（包括但不限于有关交易的借款本金、利息、罚息、违约金、服务费、管理费等），再向本平台申请注销该账户，经本平台审核同意后可正式注销账户。
4．若您不再符合本协议第一条规定的注册用户条件（包括但不限于自然人用户不再具有中国公民身份、死亡或被宣告死亡或丧失民事行为能力的或其他不符合本协议规定的情况），其在本协议项下的各项权利义务由其依法享有继承其权利义务的主体承担。本平台或其授权的主体有权根据有效法律文书（包括但不限于生效的法院判决等）处置与账户相关的款项，办理资产的转移。同时，本平台有权关闭您的账户。
5．本平台有权基于单方独立判断，在其认为可能发生危害交易安全等情形时，不经通知而先行暂停、中断或终止向您提供本协议项下的全部或部分会员服务（包括收费服务），并将注册资料移除或删除，且无需对您或任何第三方承担任何责任。前述情形包括但不限于：
（1）本平台认为您提供的资料不具有真实性、有效性或完整性；
（2）本平台发现您的账户存在异常交易或有疑义或有违法之虞时；
（3）本平台认为您的账户涉嫌洗钱、套现、传销、被冒用或其他本平台认为有风险之情形；
（4）本平台认为您已经违反本协议中规定的各类规则及精神；
（5）您在使用本平台收费服务时未按规定向本平台支付相应的服务费用；
（6）本平台基于交易安全等其他原因，根据其单独判断需先行暂停、中断或终止向您提供本协议项下的全部或部分服务，并将注册资料移除或删除的其他情形；
（7）本平台发现您使用平台提供的站内信息服务、群组服务或其他电子邮件转发服务发出垃圾邮件、信息或其他可能违反平台的服务协议的内容。

</p>

<h3>
    九、赔偿与补偿
</h3>
<p>
    1．您同意并保证不利用本平台服务从事侵害他人权益或违法之行为，若有违反者应负所有法律责任。上述行为包括但不限于：
    （1）违反依法律或合约所应负之保密义务；
    （2）冒用他人名义使用本平台服务；
    （3）涉嫌洗钱、套现或进行传销活动的；
    （4）从事任何可能含有电脑病毒或是可能侵害本平台服务系统、资料等行为；
    （5）利用本平台服务系统进行可能对互联网或移动网络正常运转造成不利影响之行为；
    （6）侵犯本平台的商业利益，包括但不限于发布未经本平台许可的商业广告；
    （7）其他本平台有正当理由认为不适当之行为。
    2．就任何第三方提出的，由于您违反本协议及纳入本协议的条款和规则或您违反任何法律、法规或侵害第三方的权利而产生或引起的每一种类和性质的任何索赔、要求、诉讼、损失和损害（实际的、特别的及有后果的），无论是已知或未知的，包括合理的诉讼费、仲裁费、保全费、保全保险费、律师费、鉴定费、评估费、公告费、公证费、执行费、差旅费，您同意就此对平台和（如适用）平台的母公司、子公司、关联公司、高级职员、高级管理人、董事、监事、代理人和雇员进行补偿并使其免受损害。
    
</p>
<h3>
    十、协议变更与终止

</h3>
<p>
    1．基于运行和交易安全的需要，本平台可以暂时停止提供、限制或改变本平台服务的部分功能，或提供新的功能。在任何功能减少、增加或者变化时，只要您仍然使用本平台的服务，表示您仍然同意本协议或者变更后的协议。
    2．除非平台终止本协议或者您申请终止本协议且经平台同意，否则本协议始终有效。
    3．平台有权在不通知您的情况下在任何时间终止本协议或者限制您使用本平台。
    
</p>

<h3>
    十一、适用法律和管辖
</h3>
<p>
    1．因平台提供服务所产生的争议均适用中华人民共和国法律（为本协议之目的，不包括香港特别行政区、澳门特别行政区以及台湾地区）。
    2．所有因本协议的解释或履行引起的争议，应首先由各方通过友好协商解决。协商不成的，将任何一方均有权将相关争议提交北京市仲裁委员会按仲裁委员会当时有效仲裁规则采用中文于北京进行仲裁。仲裁裁决将是终局的，对各方均具约束力。败诉方将承担并支付仲裁费用以及所有费用。
    
</p>

<h3>
   十二、其他条款 
</h3>
<p>
    1．在平台的某些部分或页面中可能存在除本协议以外的单独的附加服务条款，当这些条款存在冲突时，在该些部分和页面中附加条款优先适用。不论本协议的形式为电子版或纸质版，均具有同等法律效力。

</p>
<p>
    2．若本协议的任何条款被无论因何种原因完全或部分被认定为无效或者无法实施时，则应认为该条款可与本协议相分割，并可被尽可能接近各方意图的，能够保留本协议要求的经济目的的，有效的新条款所取代，同时，在此情况下，本协议中的其它条款仍然有效并具有约束力。

</p>
<p>
    3．您在使用本平台服务过程中产生任何疑问或对平台有任何投诉或建议，您可通过本平台联络平台客服人员进行咨询或申请平台协助进行争议解决。

</p>
<h2>隐私政策        </h2>
        <p>
            您申请注册成为嗨借（以下统称“我们”、“平台”或“本平台”）的用户。本平台十分重视保护您的隐私及信息安全。您在使用我们的服务时，我们可能会收集和使用您的相关信息。我们希望通过本《隐私政策》向您说明，在使用我们的服务时，我们如何收集、使用、储存和分享这些信息，以及我们为您提供的访问、更新、控制和保护这些信息的方式。本《隐私政策》与您所使用的平台服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。
您确认，在本平台相关页面确认同意时已仔细阅读、充分理解并接受本《隐私政策》的全部内容，您使用或继续使用我们的服务，即意味着同意我们按照本《隐私政策》收集、使用、储存和分享您的相关信息。
如您对本《隐私政策》或相关事宜有任何问题，请与我们联系。
我们提供服务时，可能会收集、储存和使用下列与您有关的信息。如果您不提供相关信息，可能无法注册成为我们的用户或无法享受我们提供的某些服务，或者无法达到相关服务拟达到的效果。如您继续使用我们的服务，则视为您同意我们通过以下方式获得与您有关的信息并进行存储和合理使用。

        </p>
        <h3>一、您提供的信息
        </h3>
        <p>
            1．您在注册账户或使用我们的服务时，向我们提供的相关个人信息，包括但不限于姓名、手机号码、电话号码、身份证号、电子邮件、银行卡号、居住城市、联系地址、婚姻状况、工作单位、工作职务、人际关系等信息。
2．为了完善我们的服务，您可能需要向我们提供您的手机运营商服务密码等信息。
3．您通过我们的服务向其他方提供的共享信息，以及您使用我们的服务时所储存的信息。

        </p>
        <h3>
            二、从其他方获得的您的信息

        </h3>
        <p>
            1．您同意并于此授权我们查看、储存您的通讯运营商基础资料，包括但不限于您的登记姓名、手机号码、归属省份、话费余额、套餐信息（部分）、账单信息、开户日期（部分）、本地通讯录，包括姓名、电话号码、公司（如有）、电子邮件（如有）、地址（如有）、个人资料（如有）、备注（如有）。
2．您同意并于此授权我们查看、储存通讯运营商其他相关资料，包括但不限于通话记录相关信息（包括但不限于通话发生时间、通话发生地、主叫/被叫、通话对方号码、通话时长（秒）、本地漫游长途属性）、短信记录相关信息（包括但不限于服务类型、短信发送/接受时间、对方号码）等。
3．您同意并于此授权我们可以根据您提供的姓名、身份证号、银行账号等信息向依法设立的第三方征信机构及同业机构查询您的相关信用信息及借贷情况，包括但不限于您的信用分、风险评级报告、在其他机构的借贷情况等。
4．您同意并于此授权平台及与平台合作的第三方查看、储存您的关联信用卡相关信息（包括但不限于持卡人姓名、发卡行、信用卡卡号后四位、是否开通快捷支付）等信息。
5．您同意并于此授权平台及与平台合作的第三方（淘宝或京东）查看、储存您在该第三方处留存的账号信息、实名认证状态、交易记录相关信息（包括但不限于交易时间、交易内容、收货人姓名、收货人固话/手机、收货人地址、付款银行）、交易对方户名等。
        </p>
        <h3>
            三、我们获取的您的信息
        </h3>
        <p>
            您使用服务时我们可能收集如下日志信息，即您使用我们的服务时，系统可能通过cookies、web beacon或其他方式自动采集的技术信息，包括：
1．设备或软件信息，例如您的移动设备、网页浏览器或用于接入我们服务的其他程序所提供的配置信息、您的IP地址和移动设备所用的版本和设备识别码；
2．在使用我们服务时搜索或浏览的信息，例如您使用的网页搜索词语、访问的地址，以及您在使用我们服务时浏览或要求提供的其他信息和内容详情；
3．有关您曾使用的移动应用（APP）和其他软件的信息，以及您曾经使用该等移动应用和软件的信息；
4．位置信息，指您开启设备定位功能并使用我们基于位置提供的相关服务时，收集的有关您位置的信息，包括：
（1）您通过具有定位功能的移动设备使用我们的服务时，通过GPS或WiFi等方式收集的您的地理位置信息；
（2）您或其他用户提供的包含您所处地理位置的实时信息，例如您提供的账户信息中包含的您所在地区信息，您或其他人上传的显示您当前或曾经所处地理位置的共享信息，您或其他人共享的照片包含的地理标记信息；
您可以通过关闭定位功能，停止对您的地理位置信息的收集。
5．为了更好的提供服务，我们会使用自动索引和类似的技术来提供我们的服务，并协助采集数据。您同意我们使用这类技术获得您浏览第三方平台所产生的个人数据信息，我们将使用这些信息来分析您的偏好以改进我们的服务。并且这些信息能够提升我们对您的评价，使您可以获得我们提供的更高层级的服务。

        </p>
        <h3>
            四、信息的使用
        </h3>
        <p>
            1．我们可能将在向您提供服务的过程之中所收集的信息用作下列用途：
（1）向您提供服务，以及维护、改进这些服务；
（2）在我们提供服务时，用于身份验证、客户服务、安全防范、诈骗监测、存档和备份用途，确保我们向您提供的产品和服务的安全性；
（3）帮助我们设计新服务，改善我们现有服务；
（4）使我们更加了解您如何接入和使用我们的服务，从而针对性地回应您的个性化需求，例如位置设定、个性化的帮助服务和指示，或对您和其他用户作出其他方面的回应；
（5）向您提供与您更加相关的广告以替代普遍投放的广告；
（6）评估我们服务中的广告和其他促销及推广活动的效果，并加以改善；
（7）软件认证或管理软件升级；
（8）让您参与有关我们产品和服务的调查。
2．我们使用您的信息的具体方式包括但不限于：
（1）为了能够为您提供个性化的服务，使用您的地理位置信息；
（2）为了在我们联系不到您时还能够及时向您告知我们的服务情况，使用您的通讯录信息；
（3）为了保护您的资金账户的安全，在您进行实名认证时，使用您的姓名与身份证号去全国身份证查询系统中进行核实；
（4）为了保证我们的服务质量，使用您的电话号码及密码去第三方依法设立的查询机构查询并存储您近期的话费账单等信息；
（5）为了核实您的身份，使用您的姓名、身份证号、银行账号等个人信息去第三方依法设立的征信机构查询您账户的真实性；
（6）为了维护您良好的信用记录，当您违反了平台的产品与服务条款时，我们会及时与您电话联系。如无法与您取得联系，我们会通过联系您通讯录中的其他人，从而及时告知您详情，向您提示相关风险。
3．为了让您有更好的体验、改善我们的服务或您同意的其他用途，在符合相关法律法规的前提下，我们可能将通过某一项服务所收集的信息，以汇集信息或者个性化的方式，用于我们的其他服务。例如，在您使用我们的一项服务时所收集的信息，可能在另一服务中用于向您提供特定内容，或向您展示与您相关的、非普遍推送的信息。如果我们在相关服务中提供了相应选项，您也可以授权我们将该服务所提供和储存的信息用于我们的其他服务。
4．我们将尽一切可能采取适当的技术手段，保证您可以访问、更新和更正自己的注册信息或使用我们的服务时提供的其他个人信息。在访问、更新、更正和删除前述信息时，我们可能会要求您进行身份验证，以保障账户安全。
5．我们以及我们的关联公司，可能将您的个人信息与我们的关联公司、合作伙伴及第三方服务供应商、承包商及代理（例如代表我们发出电子邮件或推送通知的通讯服务提供商、为我们提供位置数据的地图服务供应商）分享（他们可能并非位于您所在的法域），用作下列用途：
（1）向您提供我们的服务；
（2）实现“我们可能如何使用信息”部分所述目的；
（3）履行我们在《平台注册服务协议》或本《隐私政策》中的义务和行使我们的权利；
（4）理解、维护和改善我们的服务。
如我们或我们的关联公司与任何上述第三方分享您的个人信息，我们将努力确保该等第三方在使用您的个人信息时遵守本《隐私政策》及我们要求其遵守的其他适当的保密和安全措施。
除上述情形外，未经您同意，我们以及我们的关联公司不会与任何第三方分享您的个人信息。
6．随着我们业务的持续发展，我们以及我们的关联公司有可能进行合并、收购、资产转让或类似的交易，您的个人信息有可能作为此类交易的一部分而被转移。我们将在转移前通知您。
7．我们或我们的关联公司还可能为以下需要而保留、保存或披露您的个人信息：
（1）遵守适用的法律法规；
（2）遵守法院命令或其他法律程序的规定；
（3）遵守相关政府机关的要求；
（4）为遵守适用的法律法规、维护社会公共利益，或保护我们的客户、我们或我们的集团公司、其他用户或雇员的人身和财产安全或合法权益所合理必需的用途。
（5）提供给依法设立的征信机构和个人信用数据库（包括但不限于国家及地方征信机构、行业协会建立的信用共享平台及与本平台合作的第三方征信数据采集机构），以供有关单位和个人依法查询和使用。
（6）经您同意或许可的其他情形。
8．我们仅在本《隐私政策》所述目的所必需的期间和法律法规要求的时限内保留您的个人信息。
9．我们使用各种安全技术和程序，以防信息的丢失、不当使用、未经授权阅览或披露。例如，在某些服务中，我们将利用加密技术来保护您提供的个人信息。但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网行业，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。
10．出现下列情形之一的，我们可能向外部第三方公开平台所获取的您的信息：
（1）基于您的同意或授权；
（2）基于对改进产品及服务的需求；
（3）出于履行平台的法定义务，为了预防、调查非法活动，保护社会或他人人身、财产安全，所必须向有关司法、行政机关履行之报告义务；
（4）基于您违反平台相关产品及服务的规则，平台基于法定或与第三方之间的约定就您的违约行为履行相应的报告义务；
（5）平台因您违反平台相关产品及服务的规则，基于维护自身合法权益的需要，向第三方披露用户的相关信息，从而保障平台合法权益之目的；
（6）根据法律规定及合理的商业习惯，平台在计划与其他公司进行合并或进行其他资本市场活动时（包括但不限于股权融资、债券发行等），以及其他情形下我们需要接受其他主体的尽职调查时，我们可能会将经过您授权所获取的信息提供给相应的主体。平台会通过与相关主体签订保密协议的形式以及其他商业上合理的手段要求相关主体对于用户信息加以保密。
        </p>
        <h3>五、邮件和信息推送
        </h3>
        <p>
            您在使用我们的服务时，我们可能使用您的信息向您的设备发送电子邮件、新闻或推送通知。如您不希望收到这些信息，可以按照我们的相关提示，在设备上选择取消订阅。

        </p>
        <h3>
            六、与服务有关的公告
        </h3>
        <p>
            1．我们可能在必要时（例如因系统维护而暂停某一项服务时）向您发出与服务有关的公告。您可能无法取消这些与服务有关、性质不属于推广的公告。
2．我们的服务可能包括或链接至第三方提供的其他服务（包括网站）。例如：
（1）您利用第三方连线服务登录我们的服务。这些功能可能会收集您的相关信息（包括您的日志信息），并可能在您的电脑装置cookies，从而正常运行上述功能；
（2）我们通过广告或我们服务的其他方式向您提供链接，使您可以接入第三方的服务或网站；
（3）该等第三方服务可能由相关的第三方或我们运营。您使用该等第三方的其他服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策（而非通用服务条款或本《隐私政策》）约束，您需要仔细阅读其条款。本《隐私政策》仅适用于我们所收集的信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，我们对任何第三方使用由您提供的信息不承担任何责任。
3．我们不会在知情的情况下收集未成年人的个人信息，也不建议未成年人使用我们的服务。除非所在地法律允许并且监护人同意，未成年人请不要注册账户或发送自己的姓名、住址、电话、邮件地址等个人信息给我们。如果我们不小心收集到了未成年人的信息，我们在知情后会尽快删除。如果您认为我们可能不当地持有来自于或关于未成年人的信息，请联系我们。
4．除某些特定服务外，我们所有的服务均适用本《隐私政策》。这些特定服务将适用特定的隐私政策。针对某些特定服务的特定隐私政策，将更具体地说明我们在该等服务中如何使用您的信息。该特定服务的隐私政策构成本《隐私政策》的一部分。如相关特定服务的隐私政策与本《隐私政策》有不一致之处，适用该特定服务的隐私政策。
5．除本《隐私政策》另有规定外，本《隐私条款》所用词语将与《平台注册服务协议》所定义的词语具有相同的涵义。
6．请您注意，本《隐私政策》不适用于以下情况：
（1）通过我们的服务而接入的第三方服务（包括任何第三方网站）收集的信息；
（2）通过在我们服务中进行广告服务的其他公司或机构所收集的信息。

        </p>
        <h3>
            七、信息的保护

        </h3>
        <p>
            我们非常重视您的个人信息安全。平台将采取不低于一般行业惯例对于通过您的授权所获取的信息进行保护，并以一切商业上的合理努力确保这些信息的安全。我们组织内部也将根据国家相关法律、法规、规章等制度制定严格的隐私和安全准则，并要求全体员工知晓和遵守，在我们组织内部严格实施。通常，平台的员工或与平台合作的第三方并不会查看在平台系统中存储的用户信息（但平台根据本协议约定向特定主体提供的除外），当我们得知您可能违反了平台的产品及服务条款时，为了及时提醒您以免您留下不良信用记录，我们会根据本协议或您与我们另行达成的约定使用您的信息。因下列原因导致您个人信息泄露的，我们不承担任何责任：
1．基于防火墙或其他安全软件可能发生故障，或按照当前商业上可以采取的安全手段也难以避免或及时消除的故障及破坏，将可能导致您的信息遭到外部访问、窃取或删除；
2．因不可抗力所导致的您的注册资料及个人信息泄露的（包含但不限于黑客攻击、第三方导致的系统缺陷等）；
3．因您自身的会员账号密码保管不善、委托他人使用或者其他个人原因泄露账号密码导致您个人信息泄露的。

        </p>
        <h3>八、变更</h3>
        <p>
            我们可能根据相关法律、法规、政策的要求及提供服务的需要适时修订本《隐私政策》的条款，该等修订构成本《隐私政策》的一部分。如该等修订造成您在本《隐私政策》下权利的实质减少，我们将在修订生效前通过在主页上显著位置提示或向您发送电子邮件或以其他方式通知您。经修订的协议和规则在公告没有特殊说明的情况下，一经公告或通知即对您发生法律效力。您应适时关注本平台发布的相关公告或通知，在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本《隐私政策》的约束。若您不同意修改后的条款内容，应立即停止使用本平台提供的有关服务。

        </p>
        <h3>
            九、其他
        </h3>
        <p>
            所有因本《隐私政策》的解释或履行引起的争议，应首先由各方通过友好协商解决。协商不成的，任何一方均有权将相关争议提交北京市仲裁委员会按仲裁委员会当时有效仲裁规则采用中文于北京进行仲裁。仲裁裁决将是终局的，对各方均具约束力。

        </p>
        </div>
            <div class="agre">
                <p @click="confirm">同意</p>
                <p>我已阅读并同意改协议</p>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            default:'---',
            required:true
        },
        type:{
            default:0,
            required:true
        },
        userInfo:{
            name:'--',
            cardNo:'---',
            time:'---'
        }
    },
    methods:{
        close(){
            this.$emit('handleClose','close')
        },
        confirm(){
            this.$emit('handleClose','confirm')
        }
    },
    created(){
        // console.log(this.xieyi)
        // this.xieyi=this.allData[this.type]
       
    },
    filters:{
        format(val){
            return val.split(' ')[0]
        }
    }
}
</script>
<style lang="scss" scoped>
.popup{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2000;
    .mask{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.3);
        z-index: 1;
    }
    .text{
        .agre{
            // height: 80px;
            text-align: center;
            font-size: 18px;

            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            color: #fff;
           // background: rgb(106, 179, 252);
            border-radius:  0 0 8px 8px;
            background: #fff;
            p:nth-of-type(1){
                height: 40px;
                line-height: 40px;
                background: rgb(106, 179, 252);
                width: 40%;
                margin-left: 30%;
                border-radius: 5px;
                margin-top: 5px;
            }
            p:nth-of-type(2){
                font-size: 13px;
                color: #333;
            }
        }
        position: fixed;
        top: 10%;
        left: 7%;
        height: 80%;
        width: 86%;
        user-select: none;
        
        border-radius:8px;
        padding:10px;
        padding-top: 35px;
        box-sizing: border-box;
        z-index: 2;
        background: #fff;
        .scroll{
           overflow-y: scroll;
           height: 100%;
           width: 100%;
           padding-bottom: 80px;
           box-sizing: border-box;
           span{
               text-decoration: underline;
           }
        }
        img{
            height: 16px;
            position: absolute;
            top: 7px;
            right: 5px;
            z-index: 1;
        }
        .title{
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 18px;
            font-weight: 600;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            color: #333;
           // background: rgb(106, 179, 252);
            border-radius: 8px 8px 0 0;
        }

    }
}
</style>


