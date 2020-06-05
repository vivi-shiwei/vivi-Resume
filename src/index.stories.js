import React from 'react';
import App from '../App'
import {
    Heading,
    Box,
    Image,
    Stack,
    Text,
    FormLabel,
    Flex,
    Grid
} from "@chakra-ui/core";

import imgvivi from '../static/mmexport1580997585391.jpg'
import { MdLibraryBooks, MdPalette, MdGrain, MdEmail, MdInsertComment } from "react-icons/md";

const Container = props => (
    <Box width="full" maxWidth="1280px" mx="auto" px={6} {...props} />
);
const Feature = ({ title, icon, children, ...props }) => {
    return (
        <Box {...props}>
            <Flex
                rounded="full"
                size={12}
                bg="teal.500"
                align="center"
                justify="center"
            >
                <Box size={6} color="white" as={icon} />
            </Flex>
            <Heading as="h2" size="md" fontWeight="semibold" mt="1em" mb="0.5em">
                {title}
            </Heading>
            <Text>{children}</Text>
        </Box>
    );
};
const Resume = () => {
    return (
        <Container>
            <Box as="section" pt={20} pb={24}>
                <Box mx="auto">
                    <Grid
                        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
                        gap={10}
                        px={{ md: 10 }}
                    >
                        <Box>
                            <Image src={imgvivi} w="330px" />
                        </Box>
                        <Box>
                            <Box display='flex' mt={1}>
                                <Text fontWeight="bold">
                                    姓名:
                                </Text>
                                <Text ml='10px'>陳薇</Text>
                            </Box>
                            <Box display='flex' mt={1}>
                                <Text fontWeight="bold">
                                    電話:
                                </Text>
                                <Text ml='10px'>13411564215</Text>
                            </Box>
                            <Box display='flex' mt={1}>
                                <Text fontWeight="bold">
                                    電郵:
                                </Text>
                                <Text ml='10px'>2546710985@qq.com</Text>
                            </Box>
                            <Box display='flex' mt={1}>
                                <Text fontWeight="bold">
                                    籍貫:
                                </Text>
                                <Text ml='10px'>廣西</Text>
                            </Box>
                            <Stack isInline spacing={8} align="center" w="800px">
                                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                                    <Heading fontSize="xl">主修課程：</Heading>
                                    <Text mt='10px' as="kbd">1)熟悉JavaScript客户端脚本技术；</Text>
                                    <Text mt='10px'>2)熟悉Vue.js，BootStrap前端框架;</Text>
                                    <Text mt='10px'>3)熟悉Spring，SpringMVC , Mybatis；</Text>
                                    <Text mt='10px'>4)熟悉 HTML5,CSS3;</Text>
                                    <Text mt='10px'>5)熟悉SQL Server，MySQL数据库系统；</Text>
                                    <Text mt='10px'>6)熟悉 IndexedDB前端数据库；</Text>
                                </Box>
                                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                                    <Heading as="h4" size="md" fontWeight="semibold" pt={10}>
                                        自我評價
                                    </Heading>
                                    <Box pt={5}>
                                        <Text>
                                            作为一个新时代的年轻人，当然活力是一定要有的，我是一个活泼又开朗小姑娘，容易与人相处，善于思考问题，做事认真细心，我待人诚实，没有花言巧语，讲原则，说到做到；有问题不逃避，愿意虚心向他人学习；不以自我为中心；积极进取，综合素质佳，能够吃苦耐劳。知道自己的错误，会认真去改正。
                                </Text>
                                    </Box>
                                </Box>
                            </Stack>

                        </Box>
                    </Grid>

                    <Heading as="h1" size="xl" fontWeight="semibold" pt={16}>
                        個人簡歷
                        <Box as="span" color="teal.500">
                            vivi
                        </Box>
                    </Heading>

                </Box>
            </Box>

            <Grid
                templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                gap={10}
                px={{ md: 10 }}
            >
                <Feature icon={MdLibraryBooks} title="教育背景">
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            在校時間：
                        </Text>
                        <Text ml='10px'>2018.08-2020.03</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            學校：
                        </Text>
                        <Text ml='10px'>南方it學院</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            專業：
                        </Text>
                        <Text ml='10px'>軟件工程</Text>
                    </Box>
                </Feature>
                <Feature icon={MdPalette} title="校園經歷">
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            時間：
                        </Text>
                        <Text ml='10px'>2018.09-2020.02</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            參加：
                        </Text>
                        <Text ml='10px'>團委學生會生活部</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            擔任：
                        </Text>
                        <Text ml='10px'>部員</Text>
                    </Box>
                </Feature>
                <Feature icon={MdInsertComment} title="項目經歷">
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            項目名稱：
                        </Text>
                        <Text ml='10px'>圖書管理系統</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            開發周期：
                        </Text>
                        <Text ml='10px'>2018-11-01至2018-11-28</Text>
                    </Box>
                    <Box display='flex'>
                        <Text fontWeight="bold">
                            開發工具：
                        </Text>
                        <Text ml='10px'>Microsoft Visual Studio 2017＋SQL server</Text>
                    </Box>
                </Feature>
            </Grid>




            <Stack isReversed spacing={8} align="center" pt={20}>
                <Box flex="1" rounded="md">
                    <Heading fontSize="xl">校園經歷</Heading>
                    <Box mt={2}>
                        <Text mt='10px'>⦁认真对待工作，有强烈的团结协作精神，与其它同学协调友好的团结关系，及时反映他们的意见和请求。</Text>
                        <Text mt='10px'>⦁严于律己，不断提高自己，在生活部开展三月一次的全校寝室长大会中担任两次主持人。</Text>
                        <Text mt='10px'>⦁义教：就是跟福利院的小朋友一起写字，画画，还有做游戏；</Text>
                        <Text mt='10px'>⦁献血服务志愿者：工作是发传单、照顾前来献血的志愿者，以及前来咨询的志愿者。发传单是为了让更多的人知道某个地点有献血活动，自己也要了解相关的知识；</Text>
                        <Text mt='10px'>⦁参加志愿者活动期间，获得斗门区优秀志愿者奖杯。义工时长为１５小时。</Text>
                    </Box>
                </Box>
            </Stack>
            <Stack isReversed spacing={8} align="center" pt={20}>
                <Box p={5} shadow="md" borderWidth="1px" flex="1" rounded="md">
                    <Grid
                        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
                        gap={10}
                    >
                        <Box>
                            <Heading as="h4" size="md" fontWeight="semibold" pt={10}>
                                項目介紹：
                        </Heading>
                            <Box pt={5}>
                                <Text>
                                    随着互联网的普及，以及电子书的出现，传统的以纸质文献进行阅读的方式它自由的弊端更加明显地暴露出来：信息检索速度落后，质量较差，不符合当今快节奏的生活方式。图书馆信息管理系统是运行在WINDOWS系统平台上的多任务系统，对书籍及读者进行统一管理的系统。
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Heading as="h4" size="md" fontWeight="semibold" pt={10}>
                                項目功能：
                        </Heading>
                            <Box pt={5}>
                                <Text>
                                    具体包括读者的借书、还书处理；包括增加图书信息、删除和更新图书信息，添加、更新、删除、查询借阅信息、增加读者信息、删除或更新读者信息以及查询读者信息。
                                </Text>
                            </Box>
                        </Box>
                        <Box>
                            <Heading as="h4" size="md" fontWeight="semibold" pt={10}>
                                項目心得：
                        </Heading>
                            <Box pt={5}>
                                <Text>
                                    这次的项目设计用到了很多学到的东西，在某个方面是反映我们的所学的成果。在开发这个系统的过程中，碰到很多的问题，有些是大的，而有些是很小的问题，只是自己没有仔细的看清楚，遇到的问题以后，团队一起讨论，同学互帮互助。在解决了问题后，却是不一样的心情，很有成就感，很充实，因为在解决了问题的同时，我也学到了知识。
                                </Text>
                            </Box>
                        </Box>
                    </Grid>
                </Box>
            </Stack>

        </Container>
    )
}

export default { title: 'Button' };

export const withText = () => { return App(Resume) };