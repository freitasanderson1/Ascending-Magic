/*:
* @plugindesc v1.00 Fix equip screen
* @author Lantiz
*
* @Help
* Nothing to do here
*/

Scene_Equip.prototype.createCommandWindow = function() {
var wx = this._statusWindow.width;
var wy = this._helpWindow.height;
// var ww = Graphics.boxWidth - this._statusWindow.width;
this._commandWindow = new Window_EquipCommand(wx, wy, 506);
this._commandWindow.setHelpWindow(this._helpWindow);
this._commandWindow.setHandler('equip', this.commandEquip.bind(this));
this._commandWindow.setHandler('optimize', this.commandOptimize.bind(this));
this._commandWindow.setHandler('clear', this.commandClear.bind(this));
this._commandWindow.setHandler('cancel', this.popScene.bind(this));
this._commandWindow.setHandler('pagedown', this.nextActor.bind(this));
this._commandWindow.setHandler('pageup', this.previousActor.bind(this));
this.addWindow(this._commandWindow);
};

Scene_Equip.prototype.createSlotWindow = function() {
var wx = this._statusWindow.width;
var wy = this._commandWindow.y + this._commandWindow.height;
// var ww = Graphics.boxWidth - this._statusWindow.width;
var wh = this._statusWindow.height - this._commandWindow.height;
this._slotWindow = new Window_EquipSlot(wx, wy, 506, wh);
this._slotWindow.setHelpWindow(this._helpWindow);
this._slotWindow.setStatusWindow(this._statusWindow);
this._slotWindow.setHandler('ok', this.onSlotOk.bind(this));
this._slotWindow.setHandler('cancel', this.onSlotCancel.bind(this));
this.addWindow(this._slotWindow);
};