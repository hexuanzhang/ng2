import { Component, OnInit } from '@angular/core';
import { privateKey, publicKey } from './config';
import { JSEncrypt } from 'jsencrypt';

@Component({
	selector: 'app-encrypt',
	templateUrl: './encrypt.component.html',
	styleUrls: ['./encrypt.component.scss']
})
export class EncryptComponent implements OnInit {

	str: string = ''; // 明文
	encryptStr: string = ''; // 加密后的密文

	_encrypt: any; // JSEncrypt 实例

	constructor() { }

	ngOnInit() {
		this._encrypt = new JSEncrypt();

	}

	encrypt() {
		this._encrypt.setPublicKey(publicKey);
		this.encryptStr = this._encrypt.encrypt(`${this.str}`.trim());
	}

	decrypt() {
		this._encrypt.setPrivateKey(privateKey);
	}

}
