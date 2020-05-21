-- MySQL dump 10.13  Distrib 8.0.12, for Win64 (x86_64)
--
-- Host: localhost    Database: block_db
-- ------------------------------------------------------
-- Server version	8.0.12

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `category` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `short_desc` text NOT NULL,
  `full_desc` text NOT NULL COMMENT 'email activation\nchange password',
  `banner_img` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `expires_at` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Finance','Finance courses cover the fundamentals of banking, accounting, finance management, bookkeeping, corporate finance, and financial\r\nanalysis. Advanced topics include financial engineering, forensic accounting, and asset pricing.','Finance courses cover the fundamentals of banking, accounting, finance management, bookkeeping, corporate finance, and financial\r\nanalysis. Advanced topics include financial engineering, forensic accounting, and asset pricing.','img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,'0000-00-00 00:00:00','2018-07-17 15:05:05'),(2,'Mobile and Web Development','Mobile and web development courses will build your skills in creating web applications and native mobile apps for Android and iOS.','Mobile and web development courses will build your skills in creating web applications and native mobile apps for Android and iOS. Learn HTML/CSS and modern frameworks; PHP, JavaScript, Python, and other programming languages; and modern back-end technologies.','img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',0,'0000-00-00 00:00:00','2018-07-17 15:58:16'),(3,'Governance and Society','Governance and society courses address the role of governments and the behaviors of individuals and societies, both normal and\r\nabnormal.','Governance and society courses address the role of governments and the behaviors of individuals and societies, both normal and\r\nabnormal. Subtopics include international relations, policy, criminology, and racial and ethnic relations.','img/courses/governance.jpg','img/courses/governance.jpg',1,'0000-00-00 00:00:00','2018-07-17 16:24:03'),(4,'Learning English','Let\'s Learn English is a course for English learners. Certified American English teachers designed the course for beginners.','Let\'s Learn English is a course for English learners. Certified American English teachers designed the course for beginners.','img/courses/alphabet.jpg','img/courses/alphabet.jpg',1,'0000-00-00 00:00:00','2018-07-17 16:37:07'),(5,'Data Management','An organisation\'s most valuable asset is often its data, but careful management is required to ensure the maximum benefit is achieved.','A quantitative analysis class provides opportunities for students to develop skills through the use of data management-specific software applications. Topics may include creating and utilizing relational databases, data security, optimization, data analysis and business-related data presentation.','img/courses/datamanagement.jpg','img/courses/datamanagement.jpg',1,'0000-00-00 00:00:00','2018-07-17 16:56:37'),(6,'Software Development','Specializations and courses in software development address the process of creating software, including development tools and methodologies (such as Agile development), programming languages (including Python, C, Java, and Scala), and software architecture and testing.','Specializations and courses in software development address the process of creating software, including development tools and methodologies (such as Agile development), programming languages (including Python, C, Java, and Scala), and software architecture and testing.','img/courses/code-coding-computer-34676.jpg','img/courses/code-coding-computer-34676.jpg',1,'0000-00-00 00:00:00','2018-07-17 17:06:31');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `course` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `school_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `full_desc` text NOT NULL COMMENT 'email activation\nchange password',
  `short_desc` text,
  `syllabus` text,
  `prereq` varchar(255) DEFAULT NULL,
  `code` varchar(10) DEFAULT NULL,
  `tags` varchar(50) DEFAULT NULL,
  `slot` int(11) DEFAULT '0',
  `banner_img` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code_UNIQUE` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,1,1,'Financial Accounting: Foundations','In this course, you will learn foundations of financial accounting information. You will start your journey with a general overview of what financial accounting information is and the main financial statements. You will then learn how to code financial transactions in financial accounting language. In the meantime, you will learn about the most important concept in contemporary financial accounting: accrual accounting. You will then critically analyze how firms recognize revenues. Finally, you will finish the course with an analysis of accounting for short-term assets where you will go into detail on how firms account for accounts receivables and inventories. \r\n\r\nUpon successful completion of this course, you will be able to:\r\n\r\n?	Understand main financial statements and the financial information they provide\r\n?	Write a financial transaction in financial accounting language and understand how this impacts main financial statements\r\n?	Understand how accrual accounting and fundamental accounting concepts work\r\n?	Understand revenue recognition principles and how they impact main financial statements\r\n?	Account for accounts receivables and inventories.  \r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course, you will learn foundations of financial accounting information.',NULL,NULL,'fa-3748239',NULL,28,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,NULL,'2018-07-17 15:04:49'),(2,1,1,'Financial Accounting: Advanced Topics','About this course: In this course, you will explore advanced topics in financial accounting. You will start your journey with accounting for assets with more than one-year life. You will learn in detail how firms account for fixed assets. You will then move to financing of assets and discuss accounting for liabilities. The course will continue with an in-depth exploration of shareholders? equity. Finally, you will critically evaluate preparation, components, and analysis of cash flows statement. \r\n\r\nUpon successful completion of this course, you will be able to:\r\n?	Account for fixed assets\r\n?	Understand accounting for liabilities\r\n?	Evaluate shareholders? equity section of a balance sheet\r\n?	Understand preparation and information provided by cash flows statement\r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course, you will explore advanced topics in financial accounting.',NULL,'fa-3748239','fa-3748240',NULL,30,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,NULL,'2018-07-17 15:10:02'),(3,1,1,'Investments I: Fundamentals of Performance Evaluation','In this course, we will discuss fundamental principles of trading off risk and return, portfolio optimization, and security pricing. We will study and use risk-return models such as the Capital Asset Pricing Model (CAPM) and multi-factor models to evaluate the performance of various securities and portfolios. Specifically, we will learn how to interpret and estimate regressions that provide us with both a benchmark to use for a security given its risk (determined by its beta), as well as a risk-adjusted measure of the security?s performance (measured by its alpha). Building upon this framework, market efficiency and its implications for patterns in stock returns and the asset-management industry will be discussed. Finally, the course will conclude by connecting investment finance with corporate finance by examining firm valuation techniques such as the use of market multiples and discounted cash flow analysis. The course emphasizes real-world examples and applications in Excel throughout. This course is the first of two on Investments that I am offering online (?Investments II: Lessons and Applications for Investors? is the second course).\r\n\r\nThe over-arching goals of this course are to build an understanding of the fundamentals of investment finance and provide an ability to implement key asset-pricing models and firm-valuation techniques in real-world situations. Specifically, upon successful completion of this course, you will be able to:\r\n?	Explain the tradeoffs between risk and return\r\n?	Form a portfolio of securities and calculate the expected return and standard deviation of that portfolio\r\n?	Understand the real-world implications of the Separation Theorem of investments\r\n?	Use the Capital Asset Pricing Model (CAPM) and 3-Factor Model to evaluate the performance of an asset (like stocks) through regression analysis\r\n?	Estimate and interpret the ALPHA (?) and BETA (?) of a security, two statistics commonly reported on financial websites\r\n?	Describe what is meant by market efficiency and what it implies for patterns in stock returns and for the asset-management industry\r\n?	Understand market multiples and income approaches to valuing a firm and its stock, as well as the sensitivity of each approach to assumptions made\r\n?	Conduct specific examples of a market multiples valuation and a discounted cash flow valuation\r\n\r\nThis course was previously entitled ?Financial Evaluation and Strategy: Investments? and was part of a previous specialization entitled \"Improving Business and Finances Operations\", which is now closed to new learner enrollment. ?Financial Evaluation and Strategy: Investments? received an average rating of 4.8 out of 5 based on 199 reviews over the period August 2015 through August 2016. You can view a detailed summary of the ratings and reviews for this course in the Course Overview section. \r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course, we will discuss fundamental principles of trading off risk and return,  portfolio optimization, and security pricing.',NULL,'fa-3748240','fa-3748241',NULL,30,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,NULL,'2018-07-17 15:13:56'),(4,1,1,'Investments II: Lessons and Applications for Investors','In this course, you will start by reviewing the fundamentals of investments, including the trading off of return and risk when forming a portfolio, asset pricing models such as the Capital Asset Pricing Model (CAPM) and the 3-Factor Model, and the efficient market hypothesis.  You will be introduced to the two components of stock returns ? dividends and capital gains ? and will learn how each are taxed and the incentives provided to investors from a realization-based capital gains tax.  You will examine the investment decisions (and behavioral biases) of participants in defined-contribution (DC) pension plans like 401(k) plans in the U.S. and will learn about the evidence regarding the performance of individual investors in their stock portfolios.  The course concludes by discussing the evidence regarding the performance of actively-managed mutual funds. You will learn about the fees charged to investors by mutual funds and the evidence regarding the relation between fees charged and fund performance.  Segments of the portfolios of mutual funds that may be more likely to outperform and examples of strategies designed to ?earn alpha? will also be introduced.\r\n\r\nLearners are welcome to take this course even if they have not completed \"Investments I: Fundamentals of Performance Evaluation,\" as the first module contain a review of investment fundamentals and regression analysis to get everyone up to speed.  Also, the course contains several innovative features, including creative out-of-the-studio introductions followed by quick-hitting \"Module in 60\" countdowns that highlight what will be covered in each module, four \"Faculty Focus\" interview episodes with leading professors in finance, and a summary of each module done with the help of animations!\r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course, you will start by reviewing the fundamentals of investments, including the trading off of return and risk when forming a portfolio, asset pricing models such as the Capital Asset Pricing Model (CAPM) and the 3-Factor Model, and the efficient market hypothesis.',NULL,'fa-3748241','fa-3748242',NULL,30,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',0,NULL,'2018-07-17 15:18:15'),(5,1,1,'Corporate Finance I: Measuring and Promoting Value Creation','In this course you will learn how to use key finance principles to understand and measure business success and to identify and promote true value creation. You will learn how to use accounting information to form key financial ratios to measure a company?s financial health and to manage a company\'s short-term and long-term liquidity needs.  You will also learn how to use valuation techniques to make sound business investment and acquisition decisions. Finally, you will learn how to incorporate risk and uncertainty into investment decisions and how to evaluate the performance of existing investments.\r\n\r\nUpon successful completion of this course you will be able to:\r\n?	Understand how companies make investment decisions that create value for shareholders\r\n?	Use accounting statements to measure the financial health of a company\r\n?	Forecast and manage a company?s short- and long-term liquidity needs\r\n?	Measure the contribution of a new project or acquisition to shareholder value\r\n?	Incorporate risk into investment decisions using the appropriate discount rates\r\n?	Evaluate the performance of a company or divisions of a company\r\n\r\nThis course was previously entitled Financial Evaluation and Strategy: Corporate Finance. The course received an average rating of 4.7 out of 5 based on 177 reviews over the period of September 2015 through August 2016.  A detailed breakdown of ratings and reviews received for the prior version of the course, which is identical in content to the current course, is provided in the course orientation page.\r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course you will learn how to use key finance principles to understand and  measure business success and to identify and promote true value creation.',NULL,'fa-3748242','fa-3748243',NULL,30,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',0,NULL,'2018-07-17 15:22:21'),(6,1,1,'Corporate Finance II: Financing Investments and Managing Risk','In this course you will learn how companies decide on how much debt to take, and whether to raise capital from markets or from banks. You will also learn how to measure and manage credit risk and how to deal with financial distress. You will discuss the mechanics of dividends and share repurchases, and how to choose the best way to return cash to investors. You will also learn how to use derivatives and liquidity management to offset specific sources of financial risk, including currency risks. Finally, You will learn how companies finance merger and acquisition decisions, including leveraged buyouts, and how to incorporate large changes in leverage in standard valuation models.\r\n\r\nUpon successful completion of this course, you will be able to:\r\n\r\n?	Understand how companies make financing, payout and risk management decisions that create value\r\n?	Measure the effects of leverage on profitability, risk, and valuation\r\n?	Manage credit risk and financial distress using appropriate financial tools\r\n?	Understand the links between payout policies and company performance\r\n?	Use derivatives and liquidity management to offset financial risks\r\n?	Pick an appropriate financing package for an M&A or leveraged buyout deal\r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','In this course you will learn how companies decide on how much debt to take, and whether to raise capital from markets or from banks.',NULL,'fa-3748243','fa-3748244',NULL,20,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,NULL,'2018-07-17 15:26:11'),(8,1,1,'Financial Management Capstone','The Financial Management capstone will provide a learning experience that integrates across all the courses within this specialization. You will analyze a situation taking the vantage point of a company and develop a financial management plan (for instance, a global company working in a specific geography chosen by students? region or country of residence, or other consideration). You will design a deliverable to create value from the perspective of potential employers while achieving pedagogical and experiential goals. \r\n\r\nThis course is part of the iMBA offered by the University of Illinois, a flexible, fully-accredited online MBA at an incredibly competitive price. For more information, please see the Resource page in this course and onlinemba.illinois.edu.','The Financial Management capstone will provide a learning experience that integrates  across all the courses within this specialization.',NULL,'fa-3748244','fa-3748245',NULL,30,'img/courses/fm-banner.jpg','img/courses/fm-thumb.jpg',1,NULL,'2018-07-17 15:29:16'),(9,2,2,'Responsive Website Basics: Code with HTML, CSS, and JavaScript','In this course you will learn three key website programming and design languages: HTML, CSS and JavaScript. You will create a web page using basic elements to control layout and style.  Additionally, your web page will support interactivity. \r\n\r\nAt the end of the course, you will be able to:\r\n\r\n1. Define the purpose of HTML, CSS and JavaScript\r\n2. Make a simple web page using HTML\r\n3. Use CSS to control text styles and layout\r\n4. Use CSS libraries such as Bootstrap to create responsive layouts\r\n5. Use JavaScript variables and functions\r\n6. Manipulate web page content using JavaScript\r\n7. Respond to user input using JavaScript\r\n\r\nIn this course, you will complete: \r\n2 assignments writing HTML, CSS and JavaScript, each taking ~1 hour to complete\r\n4 quizzes, each taking ~20 minutes to complete\r\n1 programming exercise~30 minutes to complete\r\nmultiple practice quizzes, each taking ~5 minutes to complete','In this course you will learn three key website programming and design languages: HTML, CSS and JavaScript.',NULL,NULL,'rw-8934751','website, tech',30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:02:55'),(10,2,2,'Responsive Web Design','In this course you will learn how to apply concepts from interaction design and human computer interaction in order to design and build an interactive, professional looking website. You will learn how to make your web page designs adapt to different screen sizes using responsive grid layouts. You will learn how to add navigation and other design elements, and you will learn how to separate data and display using JavaScript objects and templates. \r\n\r\nAt the end of the course, you will be able to:\r\n1. Explain why users need to know where they are, where they can go and what is on a web page\r\n2. Create wireframe mockups of web pages \r\n3. Identify the key functional elements of web pages\r\n4. Use Bootstrap components to realise page designs\r\n5. Use JavaScript data structures such as arrays and objects to define the data used in a web page\r\n6. Use the Handlebars template library to convert data to HTML \r\n7. Add interactivity to templates using JavaScript event listeners\r\n\r\nIn this course, you will complete:\r\n1 website design assignment taking ~1 hour to complete\r\n1 programming assignment taking ~1 hour to complete\r\n4 quizzes, each taking ~20 minutes to complete\r\nmultiple practice quizzes, each taking ~5 minutes to complete','In this course you will learn how to apply concepts from interaction design and human computer interaction in order to design and build an interactive, professional looking website.',NULL,'rw-8934751','rw-8934752','',30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:06:01'),(11,2,2,'Introduction to Meteor.js Development','<p>In this course, you will learn <i>how to create a complete, multi-user </i><i>web site</i> using the <b>Meteor.js framework</b> and <b>MongoDB</b>. </p><h3>You will implement: </h3><div><ul><li>user authentication<br></li><li>security features<br></li><li>reactive templates<br></li><li>routing using iron router. <br></li></ul></div><div><br></div><div>You will carry out key database operations such as inserting, removing and updating data as well as sorting and filtering. You will see how a complete application can be built, line by line. At the end of the course, you will be able to: 1. Install the Meteor.js system and create a web application 2. Work with the Meteor.js packaging system 3. Write Meteor.js templates that can reactively display data 4. Use insert, remove and update operations on MongoDB 5. Write MongoDB data filters to search for and sort data 6 .Add user authentication functionality to a website 7. Control what is displayed on the page using iron:router 8. Implement basic security features In this course, you will complete: 1 server install assignment taking ~1 hour to complete 1 programming assignment taking ~8 hours to complete 4 quizzes, each taking ~20 minutes to complete multiple practice quizzes, each taking ~5 minutes to complete Prerequisites This course is designed to build on top of the material delivered in the previous two courses in this specialisation. Therefore, we recommend that if you find this course too technically challenging that you first complete the previous courses before re-commencing this one. Specifically, we expect you to be able to code basic HTML, CSS and Javascript before you take this course. Participation in or completion of this online course will not confer academic credit for University of London programmes</div>','In this course, you will learn how to create a complete, multi-user web site using the Meteor.js framework and MongoDB.',NULL,'rw-8934752','rw-8934753','',30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:09:27'),(12,2,NULL,'Web Application Development with JavaScript and MongoDB','In this course, you will develop more advanced web application programming skills. You will learn how to control data read and write access using methods, publish and subscribe. You will learn how to access your database and server shells using command line tools. You will use the SimpleSchema system to validate data and generate input forms automatically. You will see a complete collaborative code editing environment, TextCircle, being built from scratch. \r\n\r\nAt the end of this course, you will be able to:\r\n- use Meteor methods to control data write access\r\n- use publish and subscribe to control data read access\r\n- install and use advanced Meteor packages\r\n- add user accounts to your applications\r\n- implement complex MongoDB filters\r\n- use the MongoDB and meteor server shells\r\n- define data validations schemas using SimpleSchema\r\n- generate data input forms automatically using SimpleSchema\r\n\r\nIn this course, you will complete:\r\n2 programming assignments taking ~4 hours each to complete\r\n4 quizzes, each taking ~20 minutes to complete\r\nmultiple practice quizzes, each taking ~5 minutes to complete\r\n','In this course, you will develop more advanced web application programming skills.',NULL,'rw-8934753','rw-8934754',NULL,30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:12:30'),(13,2,2,'Responsive Website Tutorial and Examples','In this course, we will show you exciting examples of collaborative, interactive web applications that use various types of media including sound, images and big data. \r\n\r\nWe will show you how to build sites that provide precisely this functionality, using Meteor. We will also provide fully working example application code that you can use for your own commercial web projects. \r\n\r\nThe course also provides a range of advice and suggestions about how to develop bespoke web applications which match the requirements of clients, where clients are people who commission the product or people who use the product.  \r\n\r\nWe will take you through the development of the following applications:\r\n\r\n1.	A portfolio website with collaborative blogging functionality.\r\n2.	An interactive, realtime, multi user music remixing system.\r\n3.	An interactive, online graffiti wall where users can collaborate to create graphics.\r\n4.	An interactive data visualisation platform for exploring and plotting big data in exciting ways.\r\n\r\nAt the end of this course, you will be able to:\r\n\r\n?	Implement animated data visualisations and graphics using advanced user interface libraries such as vis.js \r\n?	Work with external data sources \r\n?	Create multi user, realtime, collaborative environments\r\n?	Use media APIs such as the Web Audio API','In this course, we will show you exciting examples of collaborative, interactive web applications that use various types of media including sound, images and big data.',NULL,'rw-8934754','rw-8934755',NULL,30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:14:54'),(14,2,2,'Responsive Website Development and Design Capstone','For your Responsive Website Development and Design Specialization Capstone Project, you will create a complete, responsive, multi-user, data-driven website which aims to solve a particular problem. We encourage you to create a website addressing a problem that you are interested in!  However, if you don?t have an idea of your own, we have several that we will suggest in the course.  \r\n\r\nIn the capstone project, you will:\r\n1. Develop a complete website using the full range of skills learned during the specialisation\r\n2. Work through a structured process from idea generation to product delivery\r\n3. Document and receive feedback on the development of your project from an idea to a fully functional piece of software in a series of structured assignments including peer interactions','For your Responsive Website Development and Design Specialization Capstone Project, you will create a complete, responsive, multi-user, data-driven website which aims to solve a particular problem.',NULL,'rw-8934755','rw-8934756',NULL,30,'img/courses/ResponsiveWebsite-banner.jpg','img/courses/ResponsiveWebsite.jpg',1,NULL,'2018-07-17 16:17:00'),(15,4,3,'Introduction to Communication Science','Since Antiquity, scholars have appreciated the importance of communication: as social beings, we cannot exist without communication. We need to interact with people around us, to make sense of the world and to position ourselves in a wider social and cultural reality. In this course, we look at how and why communication evolved as a science and reflect on today?s dominant paradigms. The course also extends beyond the boundaries of communication science itself, exploring dimensions of history, sociology and psychology. Join our class, together with people all over the world.\r\n\r\nIntroduction to Communication Science explores some of the basic theories, models and concepts from the fields of mass, interpersonal and intrapersonal communication. The course begins with a consideration of several basic models, subsequently progressing to the history of communication theory, linear effect-oriented theories, the reception approach and, finally, exploring theories on the production and reinforcement of culture through communication. \r\n\r\nUpon completion of this course, students should:\r\n?	have knowledge of the history and development of communication science; \r\n?	have knowledge of the dominant theoretical approaches within communication science; \r\n?	have knowledge and understanding of the most important models and concepts in this field. \r\n','Since Antiquity, scholars have appreciated the importance of communication: as social beings, we cannot exist without communication.',NULL,NULL,'ic-8776292',NULL,20,'img/courses/ic.png','img/courses/intcomsci.jpg',1,NULL,'2018-07-17 16:33:31'),(16,3,4,'Academic Listening and Note-Taking','This course will help non-native English speakers improve their listening and note-taking skills for the purpose of listening to academic lectures. You will learn techniques for improving your understanding and skills for taking more effective notes, and you will get lots of practice in using these. If you\'re planning to attend college classes in English, then this class is for you.\r\n\r\nUpon completing this course, you will be able to:\r\n1.       Understand and follow a lecture\r\n2.       Take better lecture notes\r\n3.       Discuss courses with classmates and professors\r\n4.       Give an effective academic presentation\r\n\r\nPlease note that the free version of this class gives you access to all of the instructional videos and handouts. The peer feedback and quizzes are only available in the paid version.','This course will help non-native English speakers improve their listening and note-taking skills for the purpose of listening to academic lectures.',NULL,NULL,'le-6539834',NULL,36,'img/courses/learneng.jpg','img/courses/learneng.jpg',1,NULL,'2018-07-17 16:46:11'),(17,3,4,'Presentations: Speaking so that People Listen','Do you have to give presentations in school or at your work? Is it nerve-racking? Then you\'ve come to the right place. Everyone gets a little nervous when they think about having to stand in front of other people and speak intelligently. This course will give you helpful tips for making effective speeches and delivering them well in typical American settings. You\'ll learn how to organize a presentation, how to make it memorable, and how to communicate clearly. In the course, you\'ll have several opportunities to demonstrate the presentation skills that you learn. This will help you gain the experience you need to be more confident when you give a speech in an American classroom or on the job.  Learners will record several videos of themselves giving assigned presentations and upload the videos for peer feedback.\r\n','Do you have to give presentations in school or at your work? Is it nerve-racking? Then you\'ve come to the right place.',NULL,'le-6539834','le-6539835',NULL,36,'img/courses/learneng.jpg','img/courses/learneng.jpg',1,NULL,'2018-07-17 16:48:42'),(18,3,4,'Academic Discussions in English','This is the third course in the Learn English: Advanced Speaking and Listening specialization. In this class you will learn about different types of conversations you will have in academic settings. You will also learn some strategies for helping you understand other people\'s meaning and for helping you express yourself effectively. Learners will record several videos of themselves participating in assigned group discussions with their own friends and upload the videos for peer feedback. While this might seem intimidating, it will be a great opportunity for you to practice and improve your discussion skills.','This is the third course in the Learn English: Advanced Speaking and Listening specialization. In this class you will learn about different types of conversations you will have in academic settings.',NULL,'le-6539835','le-6539836',NULL,36,'img/courses/learneng.jpg','img/courses/learneng.jpg',1,NULL,'2018-07-17 16:50:57'),(19,3,4,'Advanced Speaking and Listening Project','Learners will present a well-organized academic speech on a topic in an academic field of the learner\'s choice. The learner will need to recall all of the skills learned in the previous three courses and complete several steps to complete the project. The learner will choose an academic topic and will then need to do some research, interview a couple of experts in the field, create visual elements, and record a video of the presentation. The presenter will use techniques for preparing and practicing a presentation and demonstrate effective verbal and non-verbal skills. Doing this will help prepare you for presentations in school or work.','Learners will present a well-organized academic speech on a topic in an academic field of the learner\'s choice.',NULL,'le-6539836','le-6539837',NULL,36,'img/courses/learneng.jpg','img/courses/learneng.jpg',1,NULL,'2018-07-17 16:53:06'),(20,1,5,'Databases and SQL for Data Science','SQL is a powerful language which is used for communicating with databases. Before you step into the field of data science, it is vitally important that you set yourself apart by mastering the foundations of SQL. The purpose of this course is to introduce relational database concepts and help you learn and apply knowledge of the SQL language. Learners will also practice building and running SQL queries hands-on using a cloud-based environment as well as learn how to access databases from Jupyter notebooks using Python.','SQL is a powerful language which is used for communicating with databases.',NULL,NULL,'dm-4675234',NULL,23,'img/course/datascience.png','img/course/ibm.png',1,NULL,'2018-07-17 17:01:43'),(21,2,6,'Programming for Everybody (Getting Started with Python)','This course aims to teach everyone the basics of programming computers using Python. We cover the basics of how one constructs a program from a series of simple instructions in Python.  The course has no pre-requisites and avoids all but the simplest mathematics. Anyone with moderate computer experience should be able to master the materials in this course. This course will cover Chapters 1-5 of the textbook ?Python for Everybody?.  Once a student completes this course, they will be ready to take more advanced programming courses. This course covers Python 3.','This course aims to teach everyone the basics of programming computers using Python.',NULL,NULL,'py-3874683',NULL,35,'img/course/python-banner.jpg','img/course/py.png',1,NULL,'2018-07-17 17:12:33'),(22,2,6,'Python Data Structures','This course will introduce the core data structures of the Python programming language. We will move past the basics of procedural programming and explore how we can use the Python built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis. This course will cover Chapters 6-10 of the textbook ?Python for Everybody?.  This course covers Python 3.','This course will introduce the core data structures of the Python programming language.',NULL,'py-3874683','py-3874684',NULL,35,'img/course/python-banner.jpg','img/course/py.png',0,NULL,'2018-07-17 17:15:39'),(23,2,6,'Using Python to Access Web Data','This course will show how one can treat the Internet as a source of data.  We will scrape, parse, and read web data as well as access data using web APIs.  We will work with HTML, XML, and JSON data formats in Python.  This course will cover Chapters 11-13 of the textbook ?Python for Everybody?. To succeed in this course, you should be familiar with the material covered in Chapters 1-10 of the textbook and the first two courses in this specialization.  These topics include variables and expressions, conditional execution (loops, branching, and try/except), functions, Python data structures (strings, lists, dictionaries, and tuples), and manipulating files.  This course covers Python 3.','This course will show how one can treat the Internet as a source of data.',NULL,'py-3874684','py-3874685',NULL,0,'img/course/python-banner.jpg','img/course/py.png',1,NULL,'2018-07-17 17:24:06');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `edu_bg`
--

DROP TABLE IF EXISTS `edu_bg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `edu_bg` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `course` varchar(255) NOT NULL,
  `start_year` int(4) DEFAULT NULL,
  `end_year` int(4) DEFAULT NULL,
  `gpa` varchar(10) DEFAULT NULL,
  `address` text,
  `type` varchar(45) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `edu_bg`
--

LOCK TABLES `edu_bg` WRITE;
/*!40000 ALTER TABLE `edu_bg` DISABLE KEYS */;
INSERT INTO `edu_bg` VALUES (11,35,'Polytechnic University of the Philippines','Bachelor of Science in Information Technology',1975,1976,'1','asd\nasd\nasd\n','Masteral',NULL,'2018-07-24 13:39:16'),(12,35,'Polytechnic University of the Philippines San Pedro','BSIT',1978,1980,'1','Sample','Undergraduate',NULL,'2018-07-24 14:57:22'),(13,35,'Polytechnic University of the Philippines','adasd',1975,1975,'1','qwe','Masteral',NULL,'2018-07-24 15:18:34');
/*!40000 ALTER TABLE `edu_bg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `family_bg`
--

DROP TABLE IF EXISTS `family_bg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `family_bg` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `fn` varchar(255) NOT NULL,
  `ln` varchar(255) NOT NULL,
  `mn` varchar(255) DEFAULT NULL,
  `type` varchar(30) NOT NULL,
  `contact_no` varchar(30) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `family_bg`
--

LOCK TABLES `family_bg` WRITE;
/*!40000 ALTER TABLE `family_bg` DISABLE KEYS */;
INSERT INTO `family_bg` VALUES (12,35,'asd','sad','asd','Father','asd','asd',0,NULL,'2018-07-24 14:58:23'),(13,35,'sa','sa','sa','Sister','sa','sa',0,'2018-07-24 15:39:08','2018-07-24 14:59:27');
/*!40000 ALTER TABLE `family_bg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `id_bg`
--

DROP TABLE IF EXISTS `id_bg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `id_bg` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `number` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `id_bg`
--

LOCK TABLES `id_bg` WRITE;
/*!40000 ALTER TABLE `id_bg` DISABLE KEYS */;
INSERT INTO `id_bg` VALUES (5,35,'asd','asd','',NULL,NULL,'2018-07-24 14:57:37');
/*!40000 ALTER TABLE `id_bg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `occu_bg`
--

DROP TABLE IF EXISTS `occu_bg`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `occu_bg` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` text NOT NULL,
  `position` varchar(255) DEFAULT NULL,
  `department` varchar(255) NOT NULL,
  `salary` double DEFAULT '0',
  `duties` text,
  `start_year` int(4) DEFAULT NULL,
  `start_month` int(2) DEFAULT NULL,
  `end_year` int(4) DEFAULT NULL,
  `end_month` int(2) DEFAULT NULL,
  `reason` text,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `occu_bg`
--

LOCK TABLES `occu_bg` WRITE;
/*!40000 ALTER TABLE `occu_bg` DISABLE KEYS */;
INSERT INTO `occu_bg` VALUES (14,35,'sample','sample','sample','sample',1,'sample',1975,1,-1,-1,NULL,NULL,'2018-07-24 15:52:37'),(15,35,'smaple','asd','sample','asd',NULL,'asd',1975,9,-1,-1,NULL,NULL,'2018-07-24 15:52:53');
/*!40000 ALTER TABLE `occu_bg` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `schedule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `teacher_id` int(11) NOT NULL DEFAULT '0',
  `start_time` time NOT NULL,
  `end_time` time NOT NULL COMMENT 'email activationchange password',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `address` text,
  `price` double NOT NULL,
  `status` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (1,4,3,'08:30:00','15:00:00','2018-07-11','2018-07-12','Yakal St. Makati City, Philippines.',200,1,'2018-07-24 19:38:32',NULL),(2,4,3,'07:30:00','15:00:00','2018-07-20','2018-07-20','Diyan lang sa tabi',250,1,'2018-07-25 11:11:48',NULL),(4,4,3,'00:00:00','04:00:00','2018-08-08','2018-08-10','Diyan lang',1023,1,'2018-08-01 15:05:15',NULL),(5,4,3,'08:00:00','11:00:00','2018-08-02','2018-08-03','Jollibee',4032,1,'2018-08-01 16:14:57',NULL),(6,9,3,'05:00:00','11:00:00','2018-08-07','2018-08-08','Mcdo',5032,1,'2018-08-01 16:18:22',NULL),(7,11,3,'00:00:00','23:00:00','2018-08-08','2018-08-09','Sample',4053,1,'2018-08-03 08:57:30',NULL),(8,11,3,'00:00:00','23:00:00','2018-08-23','2018-08-24','adress here',789,1,'2018-08-03 09:00:04',NULL);
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `school` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `abbr` varchar(10) DEFAULT NULL,
  `branch` varchar(45) DEFAULT NULL,
  `address` text NOT NULL,
  `website` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `tel_no` varchar(20) DEFAULT NULL,
  `fax_no` varchar(30) DEFAULT NULL,
  `mobile_no` varchar(20) DEFAULT NULL,
  `tin` varchar(45) DEFAULT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `establish_at` varchar(10) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0' COMMENT '  ',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES (1,NULL,'Batangas State University - Main',NULL,NULL,'Rizal Avenue Extension, Batangas City 4200','http://www.batstate-u.edu.ph/','','(043) 980-0385',NULL,NULL,NULL,'batangas-u-logo.jpg','batangas-u-logo.jpg','1905',1,NULL,'2018-07-17 14:17:55'),(2,38,'Polytechnic University of the Philippines','PUP',NULL,'Science City of Munoz, Nueva Ecija 3120','https://clsu.edu.ph/','clsu@clsu.edu.ph','(+6344) 456-0107','',NULL,NULL,'cltu.jpg','cltu.jpg','1954',1,NULL,'2018-07-17 14:24:04'),(3,NULL,'Cavite State University - Main ',NULL,NULL,'Brgy. Bancod, Indang, Cavite','http://www.cvsu.edu.ph/','odreyes@cvsu.edu.ph','(+6346) 415-0010',NULL,NULL,NULL,'cavite-state-university.jpg','cavite-state-university.jpg','1906',1,NULL,'2018-07-17 14:27:54'),(4,NULL,'University of the Philippines - Baguio (UP Baguio)',NULL,NULL,'Governor Center Road, Baguio, 2600','www.upb.edu.ph','opa_upbaguio@up.edu.ph','(+6374) 442-4915','(+6374)442-3071',NULL,NULL,'updlogo.png','updlogo.png','1961',1,NULL,'2018-07-17 14:35:15');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `fn` varchar(255) NOT NULL,
  `ln` varchar(255) NOT NULL,
  `mn` varchar(255) DEFAULT NULL,
  `contact_no` varchar(30) DEFAULT NULL,
  `profile_img` varchar(255) DEFAULT NULL,
  `address` text NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNQ_USER_ID` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (9,35,'Mark Christian','Paderes','Enero','09291234567',NULL,'Diyan lang sa tabi tab\n','2018-07-25 13:53:18','2018-07-20 15:16:21'),(10,40,'Juan','','Dela Cruz','09291234567',NULL,'Diyan lang si juan',NULL,'2018-08-03 11:00:57');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_schedule`
--

DROP TABLE IF EXISTS `student_schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student_schedule` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `schedule_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `grade` varchar(5) DEFAULT NULL COMMENT 'pass | fail',
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` datetime DEFAULT NULL,
  `status` tinyint(4) DEFAULT '0' COMMENT '1=finished | 0=enrolled | -1=dropped',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_schedule`
--

LOCK TABLES `student_schedule` WRITE;
/*!40000 ALTER TABLE `student_schedule` DISABLE KEYS */;
INSERT INTO `student_schedule` VALUES (1,1,9,'90','2018-07-24 19:44:51',NULL,1),(2,2,9,NULL,'2018-07-25 11:14:21',NULL,0),(3,1,9,NULL,'2018-07-27 13:02:11',NULL,0),(4,1,9,NULL,'2018-07-27 13:03:11',NULL,0),(5,1,9,NULL,'2018-07-27 13:26:35',NULL,0),(60,1,9,NULL,'2018-07-30 13:22:01',NULL,0),(61,2,9,NULL,'2018-07-30 13:32:59',NULL,0),(62,2,9,NULL,'2018-07-30 13:34:18',NULL,0),(63,1,10,'95','2018-07-30 17:30:07',NULL,1);
/*!40000 ALTER TABLE `student_schedule` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher`
--

DROP TABLE IF EXISTS `teacher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `teacher` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `school_id` int(11) NOT NULL,
  `fn` varchar(255) NOT NULL,
  `ln` varchar(255) NOT NULL,
  `mn` varchar(255) DEFAULT NULL COMMENT 'email activation\nchange password',
  `title` varchar(255) NOT NULL,
  `occupation` varchar(255) NOT NULL,
  `short_desc` text,
  `long_desc` text,
  `profile_img` varchar(255) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher`
--

LOCK TABLES `teacher` WRITE;
/*!40000 ALTER TABLE `teacher` DISABLE KEYS */;
INSERT INTO `teacher` VALUES (3,2,'Kendrick','Crucillo','','Professor','SD','zzzzzzzzzzzzzzz','qqqqqqqqqqqqqqqqqqqqqqqqq','aasdasd','asdasd',1,NULL,'2018-07-17 10:05:47');
/*!40000 ALTER TABLE `teacher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tokens` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `ref_id` int(11) NOT NULL,
  `token` text NOT NULL,
  `payload` text NOT NULL,
  `type` varchar(30) NOT NULL COMMENT 'email activation\nchange password',
  `status` tinyint(1) DEFAULT '0',
  `expires_at` datetime NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (2,3,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJtYXJrLmNocmlzdGlhbi5wYWRlcmVzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoic2FtcGxlIiwiaWF0IjoxNTMxOTY4NTgyLCJleHAiOjE1MzIwNTQ5ODJ9.dcYELeJmkWySIs60dV8e1rejLXRxm2b_q-aminN8KJ8','{\"id\":3,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"sample\"}','VERIFY_EMAIL',0,'2018-07-20 10:49:42','2018-07-19 10:49:42'),(3,4,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJtYXJrLmNocmlzdGlhbi5wYWRlcmVzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWhhY2t5dSIsImlhdCI6MTUzMTk2ODY0NCwiZXhwIjoxNTMyMDU1MDQ0fQ.ayTgFntWdxaXBMiueX6NYhHHXtY_UU3oldUcx9fDkU4','{\"id\":4,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-20 10:50:44','2018-07-19 10:50:44'),(4,5,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiZW1haWwiOiJtYXJrLmNocmlzdGlhbi5wYWRlcmVzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWhhY2t5dSIsImlhdCI6MTUzMTk3Njc0NCwiZXhwIjoxNTMyMDYzMTQ0fQ.JcRe1mlaIZH2gGpRX31Vh6_uDWxoDkMcpCQH--1GbFY','{\"id\":5,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-20 13:05:44','2018-07-19 13:05:44'),(5,6,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJtYXJrLmNocmlzdGlhbi5wYWRlcmVzQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWhhY2t5dSIsImlhdCI6MTUzMTk3NzQ5NywiZXhwIjoxNTMyMDYzODk3fQ.HRHND2ZZeMQUi3IynE_XZEg1Pb0DBBMjbNH4baTHPnw','{\"id\":6,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-20 13:18:17','2018-07-19 13:18:17'),(6,21,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjEsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzE5Nzg5MjAsImV4cCI6MTUzMjA2NTMyMH0.hIsavLHOtnJ-iWUPQaGlgJbLfyJdsdIebjtmKG8R_Ww','{\"id\":21,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-20 13:42:00','2018-07-19 13:42:00'),(7,22,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoiYXNkQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoibWhhY2t5dSIsImlhdCI6MTUzMTk3OTA4NywiZXhwIjoxNTMxOTc5MTQ3fQ.KaHKxi4-MfPyjdjOg1eP7yVH_fE44ZPVDQgotaZ1At8','{\"id\":22,\"email\":\"asd@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',0,'2018-07-19 13:45:47','2018-07-19 13:44:47'),(8,23,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzE5NzkxNDQsImV4cCI6MTUzMTk3OTIwNH0.zOPGRSKttFJvb5bq29FpFeah5mXxLkFaZ6SChuNuw2I','{\"id\":23,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',0,'2018-07-19 13:46:44','2018-07-19 13:45:44'),(9,31,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzEsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzE5Nzk0MTIsImV4cCI6MTUzMTk3OTQ3Mn0.L-iBYGS32-ddf_z3nAwuFoFt9YXIgxRcBTmj2VBPl1o','{\"id\":31,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-19 13:51:12','2018-07-19 13:50:12'),(10,32,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzIsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzE5ODA0MjAsImV4cCI6MTUzMjA2NjgyMH0.B5i1vaX-QsEZQqjWoHw04h3yJ0J5O3I1J31sgSyGIRM','{\"id\":32,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-20 14:07:00','2018-07-19 14:07:00'),(11,33,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzMsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzIwNjk1MDYsImV4cCI6MTUzMjE1NTkwNn0.UK4MmJaHLoVaWDNfPcrItE3y0l4xPSI8B7GsJuUulsE','{\"id\":33,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',0,'2018-07-21 14:51:46','2018-07-20 14:51:46'),(12,34,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzIwNjk1NzYsImV4cCI6MTUzMjE1NTk3Nn0.2_VIRpZp5J5MoNQY1x3j5MIOg6n2DltqowKAysDDFoE','{\"id\":34,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',0,'2018-07-21 14:52:56','2018-07-20 14:52:56'),(13,35,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzUsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6Im1oYWNreXUiLCJpYXQiOjE1MzIwNzAwMzcsImV4cCI6MTUzMjE1NjQzN30.GfdPDEFenkx6i4Ow4fC5zuKnmXruzSVzORJ_8ZIgMqw','{\"id\":35,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"mhackyu\"}','VERIFY_EMAIL',1,'2018-07-21 15:00:37','2018-07-20 15:00:37'),(14,38,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzgsImVtYWlsIjoibWFyay5jaHJpc3RpYW4ucGFkZXJlc0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImFkbWlubWMiLCJpYXQiOjE1MzI5MzY5OTgsImV4cCI6MTUzMzAyMzM5OH0.Ovtu2oaSmZrCnqe3h8Rwdr1QDhU6aM3SpfNEUjMoDBc','{\"id\":38,\"email\":\"mark.christian.paderes@gmail.com\",\"username\":\"adminmc\"}','VERIFY_EMAIL',1,'2018-07-31 15:49:58','2018-07-30 15:49:58');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_AUTO_VALUE_ON_ZERO' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `UPDATE_USER_STATUS` AFTER UPDATE ON `tokens` FOR EACH ROW begin if (new.status=1 AND new.type='VERIFY_EMAIL') then UPDATE user SET status = 1, updated_at = NOW() WHERE id = new.ref_id; end if; end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaction` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `schedule_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `pay_at` varchar(200) NOT NULL COMMENT 'UBPPAY\nDRAGONPAY',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = pending\n1 = confirmed\n-1 = declined',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
INSERT INTO `transaction` VALUES (1,1,35,'U_BANK',0,'2018-07-26 20:03:41'),(2,2,35,'U_BANK',0,'2018-07-26 20:04:33'),(26,1,35,'U_BANK',0,'2018-07-27 14:06:00'),(27,1,35,'U_BANK',0,'2018-07-27 14:06:14'),(28,1,35,'U_BANK',0,'2018-07-27 14:07:54'),(29,1,35,'U_BANK',0,'2018-07-27 14:09:46'),(30,1,35,'U_BANK',0,'2018-07-27 14:10:11'),(31,1,35,'U_BANK',0,'2018-07-27 14:10:56'),(32,1,35,'U_BANK',0,'2018-07-27 14:11:46');
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction_details`
--

DROP TABLE IF EXISTS `transaction_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `transaction_details` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `tran_id` int(11) NOT NULL,
  `request` text NOT NULL,
  `response` text NOT NULL COMMENT 'UBPPAY\nDRAGONPAY',
  `request_header` text NOT NULL,
  `response_header` text NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0 = to be process\n1 = success\n-1 = failed',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction_details`
--

LOCK TABLES `transaction_details` WRITE;
/*!40000 ALTER TABLE `transaction_details` DISABLE KEYS */;
INSERT INTO `transaction_details` VALUES (1,22,'req','res','request header','response header',0,'2018-07-27 14:02:17'),(2,30,'result.transaction.req','result.transaction.res','result.transaction.req.headers','result.transaction.res.headers',0,'2018-07-27 14:10:11'),(3,31,'result.transaction.req','result.transaction.res','result.transaction.req.headers','result.transaction.res.headers',0,'2018-07-27 14:10:56'),(4,32,'result.transaction.req','result.transaction.res','result.transaction.req.headers','result.transaction.res.headers',0,'2018-07-27 14:11:46');
/*!40000 ALTER TABLE `transaction_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(16) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(254) NOT NULL,
  `role` tinyint(1) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL DEFAULT '0',
  `updated_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNQ_USERNAME` (`username`),
  UNIQUE KEY `UNQ_PASSWORD` (`password`),
  UNIQUE KEY `UNQ_EMAIL` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (35,'mhackyu','$2b$10$FY4pZCb/197H7AzA/iEUH.tzEQIbiehqMv0FpVGvIhpsAfqrWCuUa','ark.christian.paderes@gmail.com',1,1,'2018-07-20 15:01:06','2018-07-20 15:00:37'),(38,'adminmc','$2b$10$aTZVxR9suZ1L0fANyOkEROI74.ZlcekhEPPWefqUS2ueW9csx2YQm','mark.christian.paderes@gmail.com',2,1,'2018-07-30 15:50:30','2018-07-30 15:49:56'),(40,'student01','$2b$10$FY4pZCb/197H7AzA/iEUH.tzEQIbiehqMv0FpVGvIhpsAfqrWCuU','student01@gmail.com',1,1,NULL,'2018-08-03 11:00:07');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `wallet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `amount` double NOT NULL DEFAULT '0',
  `type` varchar(10) NOT NULL,
  `ref1` varchar(50) DEFAULT NULL,
  `remarks` text,
  `last_balance` double NOT NULL,
  `current_balance` double NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wallet`
--

LOCK TABLES `wallet` WRITE;
/*!40000 ALTER TABLE `wallet` DISABLE KEYS */;
INSERT INTO `wallet` VALUES (1,35,50000,'debit','some_ref_here',NULL,0,50000,'2018-07-01 09:31:47'),(2,35,250,'debit','some_ref_here_2',NULL,50000,50250,'2018-07-02 09:31:47'),(3,1,1000,'debit','some_ref_here_3',NULL,0,1000,'2018-07-26 09:32:12'),(8,35,250,'credit',NULL,NULL,50250,50000,'2018-07-27 16:30:47'),(9,35,250,'credit',NULL,NULL,50000,49750,'2018-07-27 16:30:55'),(10,35,250,'credit','samplee',NULL,49750,49500,'2018-07-27 16:30:57'),(11,35,250,'credit',NULL,NULL,49500,49250,'2018-07-27 17:00:48'),(12,35,250,'credit',NULL,NULL,49250,49000,'2018-07-27 17:01:28'),(13,35,250,'credit',NULL,NULL,49000,48750,'2018-07-27 17:02:37'),(14,35,250,'credit',NULL,NULL,48750,48500,'2018-07-27 17:12:44'),(15,35,250,'credit','150000000000',NULL,48500,48250,'2018-07-27 17:13:33'),(16,35,250,'credit','160000000000',NULL,48250,48000,'2018-07-27 17:16:52'),(17,35,250,'credit','0000000017',NULL,48000,47750,'2018-07-27 17:19:17'),(18,35,250,'credit','TLC0000000018',NULL,47750,47500,'2018-07-27 17:19:50'),(19,35,250,'credit','TLC0000000019',NULL,47500,47250,'2018-07-27 17:20:12'),(20,35,200,'credit','TLC0000000020',NULL,47250,47050,'2018-07-27 19:04:32'),(21,35,200,'credit','TLC0000000021',NULL,47050,46850,'2018-07-27 19:06:00'),(22,35,250,'credit','TLC0000000022',NULL,46850,46600,'2018-07-27 19:25:35'),(23,35,200,'credit','TLC0000000023',NULL,46600,46400,'2018-07-27 19:26:02'),(24,35,250,'credit','TLC0000000024',NULL,46400,46150,'2018-07-27 19:27:24'),(25,35,200,'credit','TLC0000000025',NULL,46150,45950,'2018-07-27 19:38:13'),(26,35,200,'credit','TLC0000000026',NULL,45950,45750,'2018-07-30 09:28:46'),(27,35,200,'credit','TLC0000000027',NULL,45750,45550,'2018-07-30 11:14:36'),(28,35,250,'credit','TLC0000000028',NULL,45550,45300,'2018-07-30 11:20:21'),(29,35,200,'credit','TLC0000000029',NULL,45300,45100,'2018-07-30 11:21:20'),(30,35,200,'credit','TLC0000000030',NULL,45100,44900,'2018-07-30 11:22:35'),(31,35,250,'credit','TLC0000000031',NULL,44900,44650,'2018-07-30 11:35:46'),(32,35,200,'credit','TLC0000000032',NULL,44650,44450,'2018-07-30 13:22:02'),(33,35,250,'credit','TLC0000000033',NULL,44450,44200,'2018-07-30 13:33:00'),(34,35,250,'credit','TLC0000000034',NULL,44200,43950,'2018-07-30 13:34:19'),(35,35,200,'credit','TLC0000000035',NULL,43950,43750,'2018-07-30 17:30:07');
/*!40000 ALTER TABLE `wallet` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-28 10:15:27
