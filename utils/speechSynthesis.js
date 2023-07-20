export default function audioPlay(content) {
  if (uni.getSystemInfoSync().platform === 'ios')
    iosPlay(content)
  else
    androidPlay(content)
}

function iosPlay(content) {
  const AVAudioSession = plus.ios.importClass('AVAudioSession')
  const AVAudioSessionObj = AVAudioSession.sharedInstance()
  AVAudioSessionObj.setCategoryerror('AVAudioSessionCategoryPlayback', null)
  AVAudioSessionObj.setActiveerror('YES', null)
  const AVSpeechSynthesizer = plus.ios.importClass('AVSpeechSynthesizer')
  const sppech = new AVSpeechSynthesizer()
  const AVSpeechUtterance = plus.ios.importClass('AVSpeechUtterance')
  const utterance = AVSpeechUtterance.speechUtteranceWithString(content)
  utterance.plusSetAttribute('rate', 0.5)
  sppech.speakUtterance(utterance)
}

function androidPlay(content) {
  const main = plus.android.runtimeMainActivity()
  const SpeechUtility = plus.android.importClass(
    'com.iflytek.cloud.SpeechUtility')
  SpeechUtility.createUtility(main, 'appid=a6500b35')
  const SynthesizerPlayer = plus.android.importClass(
    'com.iflytek.cloud.SpeechSynthesizer')
  const play = SynthesizerPlayer.createSynthesizer(main, null)
  play.startSpeaking(changeEnCode(content), null)
}

function changeEnCode(str) {
  const res = []
  for (let i = 0; i < str.length; i++) {
    res[i] = (`00${str.charCodeAt(i)
      .toString(16)}`)
      .slice(-2) + (`00${str.charCodeAt(i)
      .toString(16)}`)
      .slice(-4, -2)
  }
  let strCode = `\\u${res.join('\\u')}`
  strCode = strCode.replace(/\\/g, '%')
  return unescape(strCode)
}
