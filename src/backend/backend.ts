import express from 'express';
import { Server, ic, query } from 'azle';
import {
    HttpResponse,
    HttpTransformArgs,
} from 'azle/canisters/management';


export default Server(
    () => {
        const app = express();
        app.use(express.json());

        let phonebook = {
            'Alice': { 'phone': '123-456-789', 'added': new Date() },
        };

        // merit on chain
        let meritOnChain = {
            community: {
                total_merit_point: 234,
                total_hero: 95,
                total_funding_pool: 953
            },
            merits: {
                "0x0merit01":{ 
                    title: "best possible assistance", 
                    level: "3", 
                    target: "Save 2 dogs", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_101.png", 
                    content: "I take great pride in helping others in times of need. Whether it's providing immediate medical care or offering emotional support, I am committed to making a difference in the lives of those I encounter. Through my training and expertise, I strive to provide the best possible assistance to those in need. It's my hope that through my work, I can inspire others to step in and help those around them in times of crisis. Together, we can foster a culture of compassion and kindness, making a positive impact on the lives of those around us.",
                    wallet: "0x02......",
                    name: "Tony"
                },
                "0x0merit02":{ 
                    title: "more caring and compassionate society", 
                    level: "4", 
                    target: "Help 1 elderly", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_24.png", 
                    content: "I understand the importance of helping others. Whether it's assisting a classmate with their homework or volunteering my time for a community service project, I find joy in making a positive impact on the lives of others. I believe that true success is not only measured by academic achievements, but also by the impact we make on those around us. By helping those in need, I aspire to create a more caring and compassionate society.                    ",
                    wallet: "0x04......",
                    name: "Alexander"
                },
                "0x0merit03":{ 
                    title: "more caring and compassionate society", 
                    level: "4", 
                    target: "Help 1 student", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_13.png", 
                    content: "I understand the importance of helping others. Whether it's assisting a classmate with their homework or volunteering my time for a community service project, I find joy in making a positive impact on the lives of others. I believe that true success is not only measured by academic achievements, but also by the impact we make on those around us. By helping those in need, I aspire to create a more caring and compassionate society.                    ",
                    wallet: "0x02......",
                    name: "Peter"
                },
                "0x0merit04":{ 
                    title: "help animals in need", 
                    level: "3", 
                    target: "Help 1 dog", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_102.png", 
                    content: "When I come across an injured dog, my instincts as a first aid responder kick in. I quickly assess the situation and provide immediate medical attention. Depending on the dog's injuries, I may administer medication, apply bandages, and create a safe and comfortable environment for them. If necessary, I will transport the dog to a veterinary clinic for further treatment. My goal is to stabilize the dog's condition and prevent further harm until professional help arrives. Every life, regardless of species, is valuable, and I am committed to doing everything I can to help animals in need.",
                    wallet: "0x04......",
                    name: "Alexander"
                },
                "0x0merit05":{ 
                    title: "offer emotional support and comfort to those who are scared or in pain", 
                    level: "4", 
                    target: "Help 1 patient", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_23.png", 
                    content: "Providing immediate care and assistance to individuals who are hurt or ill is my main priority as a first aid responder. I provide rapid medical attention, control bleeding, stabilize fractures, and provide oxygen to people in need. I also offer emotional support and comfort to those who are scared or in pain. My objective is to make sure that everyone receives the best possible care until professional medical help arrives.",
                     wallet: "0x01......",
                    name: "Amelia"
                },
                "0x0merit06":{ 
                    title: "providing comfort and reassurance", 
                    level: "4", 
                    target: "Help 1 dog", 
                    image: "https://merit-on-chain.s3.amazonaws.com/img_103.png", 
                    content: "I am deeply committed to making a positive impact on the lives of others. I find great meaning in being there for people during their most vulnerable moments, providing comfort and reassurance. My goal is to not only address their immediate medical needs but to offer emotional support to help them through the challenges they face. Each day, I am inspired by the resilience and strength I witness in my fellow colleagues, patients, and their families. It is a privilege to play a role in their journeys, and I am grateful for the opportunity to serve a greater purpose.",
                    wallet: "0x01......",
                    name: "Alice"
                }
            },
            wallet_address: {
                "0x01......": {name: "Amelia", merit_point: 100, picture: "https://merit-on-chain.s3.amazonaws.com/img_27.png", swags: ["0x00swag01", "0x00swag02", "0x00swag09", "0x00swag10"] },
                "0x02......": {name: "Emma", merit_point: 100, picture: "https://merit-on-chain.s3.amazonaws.com/img_28.png", swags: ["0x00swag03", "0x00swag04"] },
                "0x03......": {name: "Sophia", merit_point: 100, picture: "https://merit-on-chain.s3.amazonaws.com/img_19.png", swags: ["0x00swag05", "0x00swag06"] },
                "0x04......": {name: "Alexander", merit_point: 100, picture: "https://merit-on-chain.s3.amazonaws.com/img_20.png", swags: ["0x00swag07", "0x00swag08"] },
            },
            wallet_address_name: {
                "0x01......": "Amelia",
                "0x02......": "Emma",
                "0x03......": "Sophia",
                "0x04......": "Alexander",
            },
            swags: {
                "0x00swag01":{
                "title": "Introduction to Crisis Counseling",
                "description": "This course provides an overview of crisis counseling techniques and strategies for providing support to individuals experiencing emotional or psychological distress. Participants will learn how to recognize the signs of crisis, offer empathetic listening, and connect individuals with appropriate resources.",
                "provided_by": "American Psychological Association",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_7.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag02":{
                "title": "Volunteer Management Training",
                "description": "This program equips individuals with the skills needed to effectively recruit, train, and manage volunteers for nonprofit organizations and community service projects. Topics include volunteer recruitment, onboarding, task assignment, and recognition.",
                "provided_by": "Volunteer Match",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_8.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag03":{
                "title": "Community Engagement Facilitation",
                "description": "Learn how to facilitate productive dialogues and gatherings that bring together diverse community stakeholders to identify shared goals and collaborate on solutions to local issues. Participants will develop skills in group dynamics, conflict resolution, and inclusive decision-making.",
                "provided_by": "National Civic League",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_9.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag04":{
                "title": "Nonprofit Grant Writing Workshop",
                "description": "This workshop teaches participants the fundamentals of grant proposal writing, including how to research funding opportunities, craft compelling narratives, and submit competitive applications to secure grants for nonprofit organizations and community programs.",
                "provided_by": "Foundation Center",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_10.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag05":{
                "title": "Trauma-Informed Care Training",
                "description": "Gain an understanding of the impacts of trauma and how to create environments and provide services that are sensitive to the needs of individuals who have experienced trauma. Participants will learn strategies for building trust, promoting safety, and supporting healing.",
                "provided_by": "Substance Abuse and Mental Health Services Administration (SAMHSA)",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_11.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag06":{
                "title": "Peer Support Specialist Certification",
                "description": "This certification program trains individuals with lived experience in mental health or substance use recovery to provide support, encouragement, and guidance to others navigating similar challenges. Participants develop skills in active listening, goal-setting, and community resource navigation.",
                "provided_by": "International Association of Peer Supporters",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_12.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag07":{
                "title": "Effective Communication for Social Workers",
                "description": "This course enhances the communication skills of social workers, equipping them with techniques for active listening, empathetic responding, and conflict resolution when working with clients, families, and interdisciplinary teams.",
                "provided_by": "National Association of Social Workers",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_13.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag08":{
                "title": "Disaster Preparedness and Response Training",
                "description": "Participants will learn how to prepare for, respond to, and recover from natural disasters, public health emergencies, and other crises. Topics include emergency planning, resource allocation, evacuation procedures, and disaster mental health support.",
                "provided_by": "Federal Emergency Management Agency (FEMA)",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_14.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag09":{
                "title": "Nonprofit Board Governance Academy",
                "description": "This program provides board members of nonprofit organizations with the knowledge and tools to fulfill their fiduciary duties, develop strategic plans, oversee financial management, and ensure organizational sustainability.",
                "provided_by": "BoardSource",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_15.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag10":{
                "title": "Advocacy and Civic Engagement Workshop",
                "description": "Learn how to effectively advocate for social, political, and economic change at the local, state, and national levels. Participants will develop skills in policy analysis, coalition building, grassroots organizing, and civic engagement.",
                "provided_by": "Center for Community Change",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_16.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag11":{
                "title": "Motivational Interviewing Techniques",
                "description": "This training teaches participants how to use the principles of motivational interviewing to help individuals explore and resolve ambivalence about change, build intrinsic motivation, and take steps towards achieving their goals.",
                "provided_by": "Motivational Interviewing Network of Trainers",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_17.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag12":{
                "title": "Nonprofit Financial Management Essentials",
                "description": "Participants will learn the fundamentals of nonprofit financial management, including budgeting, accounting, financial reporting, and compliance with relevant laws and regulations. The course also covers strategies for securing funding and ensuring financial sustainability.",
                "provided_by": "Nonprofit Finance Fund",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_18.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag13":{
                "title": "Facilitation Skills for Community Dialogues",
                "description": "This training equips individuals with the skills to lead inclusive, productive discussions that bring together diverse community members to explore complex issues, build understanding, and identify collaborative solutions.",
                "provided_by": "National Coalition for Dialogue and Deliberation",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_19.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag14":{
                "title": "Volunteer Recruitment and Retention Strategies",
                "description": "Participants will learn effective techniques for recruiting, onboarding, and retaining volunteers to support the work of nonprofit organizations and community-based initiatives. Topics include volunteer role design, volunteer management, and volunteer recognition.",
                "provided_by": "VolunteerPro",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_20.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag15":{
                "title": "Trauma-Informed Yoga Teacher Training",
                "description": "This program equips yoga teachers with the knowledge and skills to create trauma-sensitive yoga practices that promote healing, self-regulation, and resilience for individuals who have experienced trauma.",
                "provided_by": "Yoga Service Council",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_21.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag16":{
                "title": "Nonprofit Marketing and Communications",
                "description": "Participants will learn how to develop and implement effective marketing and communications strategies to promote the mission, programs, and impact of nonprofit organizations. Topics include branding, storytelling, social media, and donor engagement.",
                "provided_by": "Nonprofit Marketing Guide",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_22.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag17":{
                "title": "Peer Support Specialist Training for Youth",
                "description": "This training program prepares young adults with lived experience in mental health or substance use recovery to provide peer support, mentorship, and resources to other youth navigating similar challenges.",
                "provided_by": "Youth MOVE National",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_23.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag18":{
                "title": "Nonprofit Program Evaluation Workshop",
                "description": "Participants will learn how to design and implement effective program evaluation strategies to measure the impact of nonprofit initiatives, demonstrate accountability, and inform continuous improvement efforts.",
                "provided_by": "Nonprofit Impact",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_24.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag19": {
                "title": "Nonprofit HR Management Essentials",
                "description": "This course covers the fundamental human resources management practices and policies that nonprofit organizations need to effectively recruit, onboard, manage, and retain staff and volunteers.",
                "provided_by": "NonprofitHR",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_25.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                },
                "0x00swag20": {
                "title": "Community Asset Mapping Workshop",
                "description": "Participants will learn how to engage community members in the process of identifying local assets, resources, and strengths to inform the development of community-driven solutions and initiatives.",
                "provided_by": "Asset-Based Community Development Institute",
                "image": "https://merit-on-chain.s3.amazonaws.com/img_26.png",
                "to": [["0x01......", "Amelia"], ["0x02......", "Emma"], ["0x03......", "Sophia"], ["0x04......", "Alexander"]],
                }
            }
        };

        // merit on chain code
        app.get('/swags', (_req, res) => {
            res.json({swags: meritOnChain.swags});
        }) 

        app.get('/merits', (_req, res) => {
            res.json({merits: meritOnChain.merits});
        }) 

        app.get('/community', (_req, res) => {
            res.json({community: meritOnChain.community});
        }) 


        // sample code

        app.get('/contacts', (_req, res) => {
            res.json(phonebook);
        });

        app.post('/contacts/add', (req, res) => {
            if (Object.keys(phonebook).includes(req.body.name)) {
                res.json({ error: 'Name already exists' });
            } else {
                const contact = { [req.body.name]: { phone: req.body.phone, added: new Date() } };
                phonebook = { ...phonebook, ...contact };
                res.json({ status: 'Ok' });
            }
        });

        app.get('/greet', (req, res) => {
            res.json({ greeting: `Hello, ${req.query.name}` });
        });

        app.post('/price-oracle', async (req, res) => {
            ic.setOutgoingHttpOptions({
                maxResponseBytes: 20_000n,
                cycles: 500_000_000_000n, // HTTP outcalls cost cycles. Unused cycles are returned.
                transformMethodName: 'transform'
            });

            const date = '2024-04-01';
            const response = await fetch(`https://api.coinbase.com/v2/prices/${req.body.pair}/spot?date=${date}`)
            const response_text = await response.text();
            res.json(response_text);
        });

        app.use(express.static('/dist'));
        return app.listen();
    },
    {
        // The transformation function for the HTTP outcall responses.
        // Required to reach consensus among different results the nodes might get.
        // Only if they all get the same response, the result is returned, so make sure
        // your HTTP requests are idempotent and don't depend e.g. on the time.
        transform: query([HttpTransformArgs], HttpResponse, (args) => {
            return {
                ...args.response,
                headers: []
            };
        })
    }
);
