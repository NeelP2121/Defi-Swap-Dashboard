// const { hre } = require("web3uikit")

const main = async () => {
  const dogeFactory = await hre.ethers.getContractFactory('DogeCoin')
  const dogeContract = await dogeFactory.deploy()
  await dogeContract.deployed()
  console.log('DogeCoin deployed to: ', dogeContract.address)

  const linkFactory = await hre.ethers.getContractFactory('Link')
  const linkContract = await linkFactory.deploy()
  await linkContract.deployed()
  console.log('Link deployed to: ', linkContract.address)

  const usdcFactory = await hre.ethers.getContractFactory('Usdc')
  const usdcContract = await usdcFactory.deploy()
  await usdcContract.deployed()
  console.log('Usdc deployed to: ', usdcContract.address)

  const daiFactory = await hre.ethers.getContractFactory('Dai')
  const daiContract = await daiFactory.deploy()
  await daiContract.deployed()
  console.log('Dai deployed to: ', daiContract.address)
}

;(async () => {
  try {
    await main()
    process.exit(0)
  }catch(e){
    console.error(e)
    process.exit(1)
  }
})()