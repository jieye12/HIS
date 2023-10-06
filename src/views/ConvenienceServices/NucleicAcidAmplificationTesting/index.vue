<template>
    <div class="all">
        <el-card>
            <div class="main">
                <div class="top">
                    <div class="left">
                        <img src="../../../assets/images/nucleic.jpg" alt="">
                    </div>
                    <div class="right">
                        <div class="name">新冠核酸检测</div>
                        <div class="description">
                            <span>适用人群：</span>
                            <span>通用</span>
                        </div>
                        <div class="price">
                            ￥13.00
                        </div>
                    </div>
                    <div class="clear"></div>
                </div>
                <div class="middle">
                    <div class="project">套餐项目</div>
                    <div class="projectName">
                        <div class="left">项目名称</div>
                        <div class="right">价格(元)</div>
                        <div class="clear"></div>
                    </div>
                    <div class="details">
                        <div class="left">新型冠状病毒核酸检测（含试剂）</div>
                        <div class="right">13.00</div>
                        <div class="clear"></div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="left">
                        <span>套餐金额</span>
                        <span>￥13.00</span>
                    </div>
                    <div class="right">确定</div>
                    <div class="clear"></div>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.el-card {
    width: 50%;
    margin: 10px auto;
    position: relative;
    height: 800px;
}

.main {
    width: 90%;
    margin: 10px auto;

    .top {
        .left {
            float: left;

            img {
                width: 200px;
                height: 200px;
            }
        }

        .right {
            float: left;
            margin-left: 30px;

            .name {
                font-weight: 700;
            }

            span {
                display: inline-block;
                font-size: 12px;
                margin-right: 20px;
            }

            .price {
                margin-top: 50px;
                color: red;
            }
        }
    }

    .middle {
        .project {
            font-weight: 700;
            font-size: 20px;
        }

        .left {
            float: left;
        }

        .right {
            float: right;
        }

        .projectName {
            background-color: #f8f8f8;
            padding: 5px 10px;
        }

        .details {
            padding: 5px 10px;
        }
    }

    .bottom {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 0 20px;
        width: 100%;
        height: 40px;
        line-height: 40px;

        div {
            padding: 0;
            font-size: 20px;
            text-align: center;
        }

        .left {
            float: left;
            width: 60%;
            border: none;
        }

        .right {
            float: right;
            width: 30%;
            background-color: blue;
            color: #ffffff;
        }

        span:last-child {
            color: red;
        }
    }
}
</style>