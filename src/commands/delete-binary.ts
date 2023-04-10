import { window } from 'vscode';
import { clearData } from '../util';

export default async function deleteBinary(): Promise<void> {
    await clearData();
    window.showInformationMessage('WebP Converter binaries cleared.');
}