
    function _createModal(options){
        const DEFAULT_WIDTH = '600px';
        const modal = document.createElement('div');

        modal.classList.add('vmodal')
        modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-overlay" data-close="true">
                <div class="modal-window" style="max-width: ${options.width || DEFAULT_WIDTH}">
                    <div class="modal-header">
                        <span class="modal-title">${options.title || 'Standart title'}</span>
                        ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                    </div>
                    <div class="modal-body">
                        <p>${options.content || ''}</p>
                    </div>
                    <div class="modal-footer">
                        <button>Ok</button>
                        <button>Close</button>
                    </div>
                </div>
            </div>
        `)
        document.body.appendChild(modal)
        return modal

    }
    /*
        destroy(): void
        при клике вне окна закрыть окно если открыто

        setContents(html: string) : void | Public
        onClose(): void;
        onOpen(): void;
        beforeClose: если true то можно закрыть/ false нет
    */

    $.modal = function (options) {
        const $modal = _createModal(options);
        let distoyed = false;

        const modal = {
            open(){
                $modal.classList.add('open')
            },

            close() {
                $modal.classList.remove('open')
            },
        }

        const listenter = function(event){
            if (event.target.dataset.close){

                console.log('121212')
                modal.close();
            }
        }

        $modal.addEventListener('click', listenter)

        return Object.assign(modal, { // используется для копирования значений всех собственных перечисляемых свойств из одного или более исходных объектов в целевой объект.
            destroy() {
                $modal.parentNode.removeChild($modal);// parentNode Возвращает родителя определенного элемента DOM дерева.
                $modal.removeEventListener('click', listenter)
                distoyed = true
            }
        });

    }