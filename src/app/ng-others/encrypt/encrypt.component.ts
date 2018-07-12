import { Component, OnInit } from '@angular/core';
import { privateKey, publicKey } from './config';
import { JSEncrypt } from 'jsencrypt';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
	selector: 'app-encrypt',
	templateUrl: './encrypt.component.html',
	styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

	plainText: string = ''; // 明文
	cypherText: string = ''; // 加密后的密文

	$encrypt: any; // JSEncrypt 实例

	constructor(private _message: NzMessageService) { }

	ngOnInit() {
		this.$encrypt = new JSEncrypt();

	}

	encrypt() {
		const text = `${this.plainText}`.trim();

		// 1024 位的密钥支持明文长度最大为 127
		if (text.length > 117) {
			this._message.error('加密内容过长，请重新输入');
		} else {
			this.$encrypt.setPublicKey(publicKey);
			this.cypherText = this.$encrypt.encrypt(text);
		}
	}

	decrypt() {
		this.$encrypt.setPrivateKey(privateKey);
		this.plainText = this.$encrypt.decrypt(this.cypherText);

		if (Object.is(this.plainText, '')) {
			this._message.error('解密失败');
		}
	}
}
